const config = {
  csvName: "test.csv", // e.g. data.csv
  template: "welcome.html", // e.g. welcome.html
  subject: "Hello world", // Hello world Foo bar
  fromAddress: "sales@method.gg", // sales@method.gg
  transporterDetails: {
    host: "", // Replace 
    port: 465, // Replace
    secure: true,
    auth: {
      user: "", // Replace
      pass: "" // Replace
    },
  }
}

module.exports = config;