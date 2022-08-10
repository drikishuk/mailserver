const fs = require('fs-extra');
const handlebars = require('handlebars');
const path = require('path');

class Mailer {

  async buildEmailTemplates(template, replacements) {
    const html = await fs.readFile(path.join("./templates/" + template + ".html") , 'utf8');
    const handlebarsTemplate = handlebars.compile(html);
    const finalHtml = handlebarsTemplate(replacements);

    await fs.ensureDir('./outputs')
    await fs.writeFile(path.join("./outputs/" + template + "_" + replacements.brandName +  ".html"), finalHtml)
  }
}

module.exports =  new Mailer();