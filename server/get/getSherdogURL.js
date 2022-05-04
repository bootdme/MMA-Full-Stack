const googleIt = require('google-it');

module.exports.getSherdogURL = async (fighter) => {
  try {
    const resultLink = await googleIt({
      'only-urls': true,
      limit: 1,
      query: `${fighter} sherdog`,
    });
    if (resultLink[0].link.slice(0, 31) === 'https://www.sherdog.com/fighter') {
      return resultLink[0].link;
    }
  } catch (err) {
    return err;
  }
};
