# ionic_message

Mobile application built with Ionic v1.

Display in real time messages from a Firebase Database.

## Installation

```git clone```

```bower install```

```npm install```

```cp www/js/firebase.sample.js www/js/firebase.js```

Configure `firebase.js`

## Firebase Configuration

On Firebase Console, activate **Anonymous Authentification** (*Auth*), and replace **rules** in *Database menu* by these :

`{
  "rules": {
    ".read": true,
    ".write": true
  }
}`

## Data Structure

Import some data structured like this :

`{
  "date" : "19/07/2017",
  "id" : 0,
  "message" : "Working good",
  "status" : "open",
  "title" : "First try"
}`

Status can be **open**, **close** or **archive**.

## Contributors

- Hugo Torzuoli
