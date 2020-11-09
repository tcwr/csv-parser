
const fs = require('fs');



async function csvParse(inputfile, options) {
    try {
        const data = await readFile(inputfile);
        const dataToLines = await convertToLines(data);
        const headerLine = dataToLines.shift().split(",");
        //make a json Object
        const jsonObject = await Promise.all(
          dataToLines.map(  (value) =>   convertToObject(value, headerLine))
        );
         return jsonObject;
    }
    catch (e) {

    }



}
module.exports = csvParse;


const convertToObject = async (inputstring, headerLine) => {


      const valueArray = inputstring.split(",");

    const reducedObject = valueArray.reduce(
      function(dataObject, value, index){
            dataObject[headerLine[index]] = value;
            return dataObject;
      },
      {}
    );
    console.log("reducedObject");
    console.log(reducedObject);



  return reducedObject;
};




const readFile = async (inputfile) => {
  try {
    const data = await fs.promises.readFile(inputfile, "utf8");
    return data;
  } catch (e) {
    console.log(e);
  }
};
const convertToLines = async (data) => {
  try {
    let regExp = new RegExp("[\r+\n]+", "g");

    const arrayOfLines = await data.split(regExp);
    return arrayOfLines;
  } catch (e) {
    console.log(e);
  }
};