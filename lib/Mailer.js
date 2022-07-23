const fs = require('fs-extra');
const handlebars = require('handlebars');
const nodemailer = require("nodemailer");

class Mailer {
  constructor(transporterDetails, fromAddress) {
    this.transporter = nodemailer.createTransport(transporterDetails)
    this.fromAddress = fromAddress;
    this.emailTemplateDirectory = "./templates/";
  }

  async sendEmailTemplate(template, replacements, subject, recipients) {
    const html = await fs.readFile(this.emailTemplateDirectory + template, 'utf8');
    const handlebarsTemplate = handlebars.compile(html);
    const finalHtml = handlebarsTemplate(replacements);

    let result = await this.transporter.sendMail({
      from: this.fromAddress,
      to: recipients,
      subject: subject,
      text: "xxx", // needs sorting for spam protection
      html: finalHtml,
    });

    return result;
  }
}

module.exports = Mailer;