const admin = require('firebase-admin')
const fcm  = require('fcm-notification')
const serviceAccount = require('../config/firebase.json')
const cert = admin.credential.cert(serviceAccount)
const FCM = new fcm(cert)
SendHabitRequestService = async (users) => {
    const message = {
        notification:{
            title:"Gym",
            body:"Gym Habit Request From John"
        },
        data:{
            groupHabitId:""
        }
    }
    FCM.sendToMultipleToken(message,users,(err,resp) => {
        if(err)
            console.log("fcm err", err)
        else
            console.log("fcm sent",resp)
    })
}
module.exports = SendHabitRequestService