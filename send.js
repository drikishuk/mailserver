const config = require('./config');

const Mailer = require("./lib/Mailer");
const csv = require("csvtojson");


(async () => {
  // Developer Only
  const jsonArray = await csv().fromFile(`./data/${config.csvName}`);
  const mailer = new Mailer(config.transporterDetails, config.fromAddress)
  try {
    const promises = jsonArray.map(async (data, index) => {
      const result = await mailer.sendEmailTemplate(config.template, data, config.subject, data.recipient)
      console.log(result)
    })
    await Promise.all(promises);

    console.log(`Mailer Finished: Sent ${jsonArray.length} emails.`)
  } catch (error) {
    console.error(error)
  }
  
})();