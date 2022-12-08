```
importScripts('https://www.gstatic.com/firebasejs/5.4.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.4.1/firebase-messaging.js');
firebase.initializeApp({
  messagingSenderId: '132798184152',
});
const messaging = firebase.messaging();
```

```
importScripts('ngsw-worker.js');
importScripts('firebase-messaging-sw.js');
```

```
"gcm_sender_id": "103953800507"
```

```
key=''
constructor(private readonly afMessaging: AngularFireMessaging) {}
enableNotification() {
  this.afMessaging.requestToken // getting tokens
    .subscribe(
      (token) => {
        // USER-REQUESTED-TOKEN
        console.log('Permission granted! Save to the server!', token);
        this.key = token || '';
      },
      (error) => {
        console.error(error);
      }
    );
}
```
