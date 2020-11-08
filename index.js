
const fs = require('fs');



async function csvParse(inputfile, options) {
    try {
        const data = await readFile(inputfile);
        return data;
    }
    catch (e) {

    }



}
module.exports = csvParse;

const readFile = async (inputfile) => {
  try {
    const data = await fs.promises.readFile(inputfile, "utf8");
    return data;
  } catch (e) {
    console.log(e);
  }
};
