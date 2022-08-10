const fs = require('fs-extra');
const handlebars = require('handlebars');
const path = require('path');

class Mailer {

  async buildEmailTemplates(template, replacements) {
    // Desktop
    const htmlDesktop = await fs.readFile(path.join("./templates/" + template + "_desktop" + ".html") , 'utf8');
    const handlebarsTemplateDesktop = handlebars.compile(htmlDesktop);
    const finalHtmlDesktop = handlebarsTemplateDesktop(replacements);

    await fs.ensureDir('./outputs')
    await fs.writeFile(path.join("./outputs/" + template + "_" + replacements.brandName + "_desktop" +  ".html"), finalHtmlDesktop)

    // Mobile
    const htmlMobile = await fs.readFile(path.join("./templates/" + template + "_mobile" + ".html") , 'utf8');
    const handlebarsTemplateMobile = handlebars.compile(htmlMobile);
    const finalHtmlMobile = handlebarsTemplateMobile(replacements);

    await fs.ensureDir('./outputs')
    await fs.writeFile(path.join("./outputs/" + template + "_" + replacements.brandName + "_mobile" +  ".html"), finalHtmlMobile)
  }
}

module.exports =  new Mailer();