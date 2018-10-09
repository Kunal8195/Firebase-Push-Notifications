/*
const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

exports.sendNotifications = functions.database.ref('/notifications/{notificationId}').onWrite((event) => {

  // Exit if data already created
  if (event.data.previous.val()) {
    return;
  }

  // Exit when the data is deleted
  if (!event.data.exists()) {
    return;
  }

  // Setup notification
  const NOTIFICATION_SNAPSHOT = event.data;
  const payload = {
    notification: {
      title: `New Message from ${NOTIFICATION_SNAPSHOT.val().user}!`,
      body: NOTIFICATION_SNAPSHOT.val().message,
      icon: NOTIFICATION_SNAPSHOT.val().userProfileImg,
      click_action: `https://${functions.config().firebase.authDomain}`
    }
  }

})
*/
//"firebase-admin": "5.4.0",
//"firebase-functions": "^2.0.5",
const functions = require('firebase-functions');
const admin = require('firebase-admin');


var serviceAccount = require("./pushtest-ba989-firebase-adminsdk-vcxz5-7b6f33bdfb.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://pushtest-ba989.firebaseio.com"
});



exports.sendNotifications = functions.database.ref('/notifications/{notificationId}').onWrite((data, context) => {

    // Exit if data already created
    if (data.before.val()) {
        return;
    }

    // Exit when the data is deleted
    // if (!data.exists()) {
    //     return;
    // }

    // Setup notification
    const NOTIFICATION_SNAPSHOT = data;
    const payload = {
        notification: {
            title: `New Message from ${NOTIFICATION_SNAPSHOT.after.val().user}!`,
            body: NOTIFICATION_SNAPSHOT.after.val().message,
            icon: NOTIFICATION_SNAPSHOT.after.val().userProfileImg,
            click_action: `https://${JSON.parse(process.env.FIREBASE_CONFIG)}`
            
        }
    }

    // Clean invalid tokens
    function cleanInvalidTokens(tokensWithKey, results) {

        const invalidTokens = [];

        results.forEach((result, i) => {
            if (!result.error) return;

            console.error('Failure sending notification to', tokensWithKey[i].token, result.error);

            switch (result.error.code) {
                case "messaging/invalid-registration-token":
                case "messaging/registration-token-not-registered":
                    invalidTokens.push(admin.database().ref('/tokens').child(tokensWithKey[i].key).remove());
                    break;
                default:
                    break;
            }
        });

        return Promise.all(invalidTokens);
    }


    return admin.database().ref('/tokens').once('value').then((data) => {

        if (!data.val()) return;

        const snapshot = data.val();
        const tokensWithKey = [];
        let tokens = [];

        for (let key in snapshot) {
            tokens.push(snapshot[key].token);
            tokensWithKey.push({
                token: snapshot[key].token,
                key: key
            });
        }
        tokens = ["eavcAPvLMKI:APA91bH8h6j47U6jIOvjVrhsWh2RBADQMZ_Kn778l2GpYO-cXUU8NtjitkEEmsKsnWtGntcEkKmaY-mRpOalik77OgzbDDI_o_C_AYkKAFbeI7_Za_tWbmbZ_4ApvOfJ944NBQ-6GDqH"];
        return admin.messaging().sendToDevice(tokens, payload)
            .then((response) => cleanInvalidTokens(tokensWithKey, response.results))
            .then(() => admin.database().ref('/notifications').child(NOTIFICATION_SNAPSHOT.key).remove())
    });

})