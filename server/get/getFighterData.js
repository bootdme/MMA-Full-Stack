const axios = require('axios');
const cheerio = require('cheerio');

const fighter = {
  url: '',
  name: '',
  nickname: '',
  age: '',
  birthday: '',
  locality: '',
  nationality: '',
  association: '',
  height: '',
  weight: '',
  weightClass: '',
  style: '',
  wins: {
    total: 0,
    knockouts: 0,
    submissions: 0,
    decisions: 0,
    others: 0,
  },
  losses: {
    total: 0,
    knockouts: 0,
    submissions: 0,
    decisions: 0,
    others: 0,
  },
  noContests: 0,
  fights: [],
  imageUrl: '',
};

module.exports.getFighterData = async (url) => {
  try {
    const html = await axios.get(url);
    const $ = await cheerio.load(html.data);

    /* Fighter information from the fighter-info div on Sherdog */
    fighter.url = url;
    const fighterInfo = $('.fighter-info');
    fighter.name = fighterInfo.find('[itemprop="name"]>.fn').text();
    fighter.nickname =
      fighterInfo.find('[itemprop="name"]>.nickname').text() || 'null';
    fighter.imageUrl = fighterInfo.find('img.profile-image.photo').attr('src');
    fighter.age = fighterInfo
      .find('[itemprop="birthDate"]')
      .prevAll('b')
      .text();
    fighter.birthday = fighterInfo.find('[itemprop="birthDate"]').text();
    fighter.locality = fighterInfo.find('[itemprop="addressLocality"]').text();
    fighter.nationality = fighterInfo
      .find('strong[itemprop="nationality"]')
      .text();
    fighter.height = fighterInfo.find('[itemprop="height"]').parent().text();
    fighter.weight = fighterInfo.find('[itemprop="weight"]').parent().text();
    fighter.association = [];
    fighterInfo.find('[itemprop="memberOf"]').each((i, el) => {
      const item = $(el).text();
      fighter.association.push(item);
    });
    fighter.weightClass = fighterInfo.find('.association-class>a').text();
    fighter.style = fighterInfo.find('.association-class>b').text() || 'null';

    /* Fighter wins */
    const fighterWins = $('.wins');
    const fighterWinBy = fighterWins.find('.pl');
    fighter.wins.knockouts = parseInt($(fighterWinBy.get(0)).text(), 10);
    fighter.wins.submissions = parseInt($(fighterWinBy.get(1)).text(), 10);
    fighter.wins.decisions = parseInt($(fighterWinBy.get(2)).text(), 10);
    const winOthers = parseInt($(fighterWinBy.get(3)).text(), 10);
    fighter.wins.others = winOthers || 0;

    /* Fighter losses */
    const fighterLosses = $('.loses');
    const fighterLoseBy = fighterLosses.find('.pl');
    fighter.losses.knockouts = parseInt($(fighterLoseBy.get(0)).text(), 10);
    fighter.losses.submissions = parseInt($(fighterLoseBy.get(1)).text(), 10);
    fighter.losses.decisions = parseInt($(fighterLoseBy.get(2)).text(), 10);
    const lossOthers = parseInt($(fighterLoseBy.get(3)).text(), 10);
    fighter.losses.others = lossOthers || 0;

    /* Fighter no contests */
    const fighterNoContest = $('.nc');
    const noContests = parseInt(
      fighterNoContest.find('span:nth-child(2)').text(),
      10
    );
    fighter.noContests = noContests || 0;

    /* Fighter fight information */
    fighter.fights = [];
    $('.module.fight_history tr:not(.table_head)').each((i, el) => {
      const item = $(el);
      const result = item.find('td:nth-child(1) .final_result').text();
      const opponentName = item.find('td:nth-child(2) a').text();
      const opponentUrl = item.find('td:nth-child(2) a').attr('href');
      const eventName = item.find('td:nth-child(3) a').text();
      const eventUrl = item.find('td:nth-child(3) a').attr('href');
      const eventDate = item.find('td:nth-child(3) .sub_line').text();
      const method = `${
        item
          .find('td:nth-child(4)')
          .text()
          .split(/\)(.*)/)[0]
      })`;
      const referee = item.find('td:nth-child(4) .sub_line').text();
      const refereeUrl =
        item.find('td:nth-child(4) .sub_line a').attr('href') || 'null';
      const round = item.find('td:nth-child(5)').text();
      const time = item.find('td:nth-child(6)').text();

      const fight = {
        name: eventName,
        date: eventDate,
        opponent: opponentName,
        result,
        method,
        referee,
        refereeUrl,
        round,
        time,
        eventUrl,
        opponentUrl,
      };

      if (result !== '') {
        fighter.fights.push(fight);
      }
    });
    return fighter;
  } catch (err) {
    return err;
  }
};
