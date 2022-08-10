const config = require('./config');
const Builder = require("./lib/Builder");
const csv = require("csvtojson");


(async () => {
  // Developer Only
  const jsonArray = await csv().fromFile(`./data/${config.csvName}`);
  try {
    const promises = jsonArray.map(async (data, index) => {
      const result = await Builder.buildEmailTemplates(config.template, data)
    })
    await Promise.all(promises);
  } catch (error) {
    console.error(error)
  }
  
})();