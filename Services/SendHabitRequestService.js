const admin = require('firebase-admin')
const fcm  = require('fcm-notification')
const serviceAccount = require('../config/firebase.json')
const cert = admin.credential.cert(serviceAccount)
const FCM = new fcm(cert)
SendHabitRequestService = (users) => {
    const message = {
        notification:{
            title:"Gym",
            body:"Gym Habit Request From John"
        },
        data:{
            groupHabitId:""
        },
        tokens : users
    }
    FCM.send(message,(err,resp) => {
        if(err)
            console.log("fcm err", err)
        else
            console.log("fcm sent",resp)
    })
}