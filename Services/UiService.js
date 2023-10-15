const fs = require('fs')
const path = require('path')
require('D:/VS code/HB/Server/Ui')
// const homeUiFilePath ="..\\Ui\\home_page.json"
// const homeUiFilePath =`D:\\VS code\\HB\\Server\\Ui\\home_page.json`
const homeUiFilePath = path.resolve('/Ui',"home_page.json")
const GetUi = (user) => {
    try {
        console.log("uipath", homeUiFilePath)
        let jsonData = fs.readFileSync(homeUiFilePath,'utf8')
        const homeUi = JSON.parse(jsonData)
        homeUi.sections[1].elements[0].headerText = `Hi.. ${user.username}`
        return homeUi 
    } catch (error) {
        console.log("ui error ",error)
    }
    

}
module.exports = GetUi