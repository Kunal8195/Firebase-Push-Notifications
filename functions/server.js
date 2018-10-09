/*
var FCM = require('fcm-push');

var serverKey = '';
var fcm = new FCM("MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCYMxXo6xnZ/lWPxhi1V40dJPpLOKPcTOj3bD8S+FgWdPcLVEzB1mM071sThQ7MMQTZ6z17g/4HzXa/aNmNBOTNO6+czvOZz8O4145V0/qFuOE4XbtJPl3UP4ynGq+Iny97nbMBjrL8DTTR6eAHH+8Hx7ncvk0iyqCFg+lKwkQb0V5UuKgRcuepXCrtvdy8q0ptAcSjPcWeKNsz0XJl8sCK/wjCjECZ0cGqgrd70Qpf6WF9SdTReLoLlM93Exp/M5muG2MrmNyr9qHHGqK2FqQM0P0+K4gbum4089fqlv7TIgYJffa+m6OeXTCasgbExMcnPGxOmueKqPem0M2Ra7anAgMBAAECggEALcSC7Kkx+2svWI415OZAgYiamZ8dK0SXc7vB1dcHSi1/EpGViV6KM6NcjGihNAbzkgJa2TcuXzNKZ7HEZdMYaJzvqKRU/aZMEVwEqcuWVLrtQxFwncxa09YOWju8mEViNnaMG0ZJjWD9RrhhDVNtgjXtrrMtJ+6tyaiKsVfsuj5K9vU1CoHAjmMfXvDY9+qgT5SLoU1YF10o0Lc5LvAkyw36N9v9LhTspfFuHBGeTEZ1KNtD1MfKUN6Y6cSeGzVHQ86M/SwVR8Lk0H0mMBCLeXle8bFyREG4E8VkD8z2Qoal3QS+PTYPzxJ7HXnVZgdae469/Flz6jlwlC6S7URpHQKBgQDTIb662WCrSZM6IXI0Sl3JtwCYbgrr5cZPYqTbu8pRXxa33jGu5di03qK4p9yxL18S+6rPwmePyZdLuSxBInKQWlwjpgADnVpuWlx+V4Nr8irGxMHSZA5ImUk1lB0jAdmouNUUaL2Yx3/uQx3EB/aMYaPKc4aHl829kHYs0VJJ6wKBgQC4izwFCIsoolLiZC2TCsV5qu63uojbxsZLO4d0ahz0YZQchL6ushuAvyTPJEm9YE698XqWQPXBRUwgVMyoCqiskIk7YbRuxmwutFZlMxuKvwAfvbCOxVg23YoEule4X9/3Ko1eNVzOBmW5EjGfd+Ci3+yKWxBsIy/9M6NP23v7NQKBgQDNOggD6DknRqVt5AT2/zKbWN+jS5QiKX/Surg1Px0ya5PRtpHkyFcVuTPC+qhzMvDfqvImcXnpMrN2T9DMn4ds+eiGXl21Jcc5bWxrAvYkf4lFHQyqTcf0mcun4QlRdgL1FnVJGWbykzmviF3upy7o1iA4MoOaWd0LXtkAR5gNcQKBgEksXDYatyL7iiXeVvvQ75BYqKMNQarzXDkEd6c/VA/KiTHtqLYYRTN9lxjTaLHAeDh0gYkGZOunkJHZTfTrlQonnWKAUU0DPG4gb4ldBHS1W1U6n8FcmqfWnB1XzeR7j5CvvLI4Mn42pysE/cwfemDarS4HAbH/Gc4qJX1KqBRpAoGBALex0x//0pe+NQDb08abloL30MoXDWLFpCtZHvNnfj5TRwdpuojEjeWRtdjZGL+cTKTvtfNuXQWConEV9Igmn+5btjoQEhFcqanSL1RPaxyG8owgk8/D+rYAqtPVVZ8kSeTd6MV/fzYJLKeAUsrhtn+eNvjCuazemYX7PMYvfCtL");

var message = {
    to: '"cfYp6Tm_BWQ:APA91bEVObeJXefZifQAZGahGPmsCqGbai5us9r-BDLCnr1R7P1Ac2RyRAnwS5VAqc8IfEtRHgwLA2K3jmR63mLNLLM9Xv7ERRmyebFSfRTKhQpg6PpV_D2I43uZ48DeI8bhg3M1cUYcCt59v6XiZJ-LYhG4_JpxRA"',
    
    data: {
        your_custom_data_key: 'your_custom_data_value'
    },
    notification: {
        title: 'Title of your push notification',
        body: 'Body of your push notification'
    }
};

//callback style
// fcm.send(message, function(err, response){
//     if (err) {
//         console.log("Something has gone wrong!");
//     } else {
//         console.log("Successfully sent with response: ", response);
//     }
// });

//promise style
fcm.send(message)
    .then(function(response){
        console.log("Successfully sent with response: ", response);
    })
    .catch(function(err){
        console.log("Something has gone wrong!");
        console.error(err);
    })

    */

const admin = require('firebase-admin');


var serviceAccount = require("./pushtest-ba989-firebase-adminsdk-vcxz5-7b6f33bdfb.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://pushtest-ba989.firebaseio.com"
});

const message = {
  notification: {
    title: 'EPA fuel economy stats for new Mazda6',
    body: 'New turbo charged 2.5L engine does 23/31/36 mpg.',
  },
  token: "fdF0gBbv7rs:APA91bFy4H1yVzPRs6AdUN1yAPao8uClYpAYV3qDUUkNtUpaTb2UFES7QOdKLpUnEmcoe1l9VF5IIkAh4NECvwdiR1WL5BMeFVzfv567ntFyG6R7xNp68wfhK679h6pyZOoO9krlI6U4"
};

admin.messaging().send(message).then(data => {
    console.log('sent: ', data)
    return data;
}).catch(err => console.log('err: ', err))

var tokens = ["fdF0gBbv7rs:APA91bFy4H1yVzPRs6AdUN1yAPao8uClYpAYV3qDUUkNtUpaTb2UFES7QOdKLpUnEmcoe1l9VF5IIkAh4NECvwdiR1WL5BMeFVzfv567ntFyG6R7xNp68wfhK679h6pyZOoO9krlI6U4"];

// admin.messaging.sendToDevice(tokens, message)
// .then(res => console.log('res:', res))
// .catch(err => console.log('err:', err))