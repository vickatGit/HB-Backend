const homeData = require('../Ui/home_page')
const path = require('path')
const {GetUserPictureUrl} = require('../Services/SocialService')
// require('D:/VS code/HB/Server/Ui')
// const homeUiFilePath ="..\\Ui\\home_page.json"
// const homeUiFilePath =`D:\\VS code\\HB\\Server\\Ui\\home_page.json`
// const homeUiFilePath = path.resolve('./')
const GetUi = async (user,userId) => {
    // console.log("paths",fs.readdirSync(homeUiFilePath))
    try {
        // console.log("uipath", homeUiFilePath)
        // let jsonData = fs.readFileSync(homeUiFilePath,'utf8')
        const userAvatarUrl = await GetUserPictureUrl(userId)
        const homeUi = await JSON.parse(homeData)
        homeUi.sections[1].elements[0].headerText = `Hi.. ${user.username}`
        homeUi.sections[1].elements[1].url = userAvatarUrl
        console.log("home ui", homeUi.sections[1].elements[1])
        return homeUi 
    } catch (error) {
        console.log("ui error ",error)
    }
    

}
module.exports = GetUi