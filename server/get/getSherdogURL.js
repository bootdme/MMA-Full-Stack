const googleIt = require('google-it');

module.exports.getSherdogURL = async (fighter) => {
  try {
    const resultLink = await googleIt({
      'only-urls': true,
      limit: 1,
      query: `${fighter} sherdog`,
    });
    if (resultLink[0].link.indexOf('sherdog.com/fighter') > -1) {
      return resultLink[0].link;
    }
  } catch (err) {
    console.log(123123123);
    console.error(err);
  }
};
