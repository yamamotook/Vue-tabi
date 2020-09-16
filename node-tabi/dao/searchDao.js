const dbUtil = require("./dbUtil.js");

async function searchByWord(word, success){
    word = '%' + word + '%';
    console.log(word);
    const citySql = "SELECT city.cityId,city.cityName,area.areaId,area.areaName,area.areaName_en from city,area,province WHERE city.cityName LIKE ? AND city.provinceId = province.provinceId AND province.areaId = area.areaId";
    const areaSql = `SELECT areaId,areaName,areaName_en from area WHERE areaName LIKE ? OR areaName_en LIKE ?`;
    const paysageSql = `SELECT paysage.paysageName, paysage.paysageId, area.areaName_en, city.cityName FROM paysage,city,area WHERE paysage.paysageName LIKE ? AND paysage.areaId = area.areaId AND paysage.cityId = city.cityId`;
    const connection = dbUtil.createConnection();
    connection.connect();
    let result = {};
    await new Promise((resolve, reject) => {
        connection.query(citySql, word,function(error, queryResult) {
            console.log('end1');
            console.log(error);
            if(error == null){
                result['city'] = queryResult;
                resolve();
            }else{
                throw new Error(error);
            }
        });
    }); 
    console.log(1);

    await new Promise((resolve, reject) => {
        connection.query(areaSql, [word, word],function(error, queryResult) {
            console.log('end2');

            if(error == null){
                result['area'] = queryResult;
                resolve();
            }else{
                throw new Error(error);
            }
        });
    });
    console.log(2);


    await new Promise((resolve, reject) => {
        connection.query(paysageSql, word,function(error, queryResult) {
            console.log('end3');
            if(error == null){
                result['paysage'] = queryResult;
                resolve();
            }else{
                throw new Error(error);
            }
        });
    });
    console.log(3);


    success(result);
   connection.end();
    


}


module.exports = {
    searchByWord
}