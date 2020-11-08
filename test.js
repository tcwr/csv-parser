  const csvParse = require("./index");

(async () => {
try {
        let response = await csvParse("./test.csv");
        console.log(response);
    } catch (error) {
        console.error(error)
    }

})();
