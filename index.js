var fs = require("fs");
const path = require("path");

const filename = 'output/analysis.csv'
const filepath = path.resolve(__dirname, filename)

fs.writeFile(filepath, "Hey there!", (err) => {
  if (err) {
    return console.log(err);
  }

  console.log("The file was saved!");
});
