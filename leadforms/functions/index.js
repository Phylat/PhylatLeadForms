const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

//sendgridapikey   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

// Sends an email confirmation when a user changes his mailing list subscription.
const admin = require('firebase-admin');
admin.initializeApp();
const SENDGRID_API_KEY = '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';

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(SENDGRID_API_KEY);

//userId = ""

exports.firestoreEmail = functions.firestore
    .document('users/{userId}/followers/{followerId}')
    .onCreate(event => {

        const userId = event.params.userId;

        const db = admin.firestore()

        return db.collection('users').doc(userId)
            .get()
            .then(doc => {

                const user = doc.data()

                const msg = {
                    to: user.email,
                    from: 'hello@angularfirebase.com',
                    subject: 'New Follower',
                    // text: `Hey ${toName}. You have a new follower!!! `,
                    // html: `<strong>Hey ${toName}. You have a new follower!!!</strong>`,

                    // custom templates
                    templateId: '4386b92e53ef4a23939a87777b3be4f3',
                    substitutionWrappers: ['{{', '}}'],
                    substitutions: {
                        name: user.displayName
                        // and other custom properties here
                    }
                };

                return sgMail.send(msg)
            })
            .then(() => console.log('email sent!'))
            .catch(err => console.log(err))


    });