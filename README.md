# CodeLab

[![CircleCI](https://circleci.com/gh/mcaleb808/codeLab.svg?style=svg)](https://circleci.com/gh/mcaleb808/codeLab) [![Maintainability](https://api.codeclimate.com/v1/badges/ebc1747f46d5bf197fa2/maintainability)](https://codeclimate.com/github/mcaleb808/codeLab/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/ebc1747f46d5bf197fa2/test_coverage)](https://codeclimate.com/github/mcaleb808/codeLab/test_coverage)

## Setup

This project was bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app).

### `npm start`

Runs your app in development mode.

Open it in the [Expo app](https://expo.io) on your phone to view it. It will reload if you save edits to your files, and you will see build errors and logs in the terminal.

#### `npm run ios`

Like `npm start`, but also attempts to open your app in the iOS Simulator if you're on a Mac and have it installed.

#### `npm run android`

Like `npm start`, but also attempts to open your app on a connected Android device or emulator. Requires an installation of Android build tools (see [React Native docs](https://facebook.github.io/react-native/docs/getting-started.html) for detailed setup).

#### `npm run eject`

This will start the process of "ejecting" from Create React Native App's build scripts. You'll be asked a couple of questions about how you'd like to build your project.

**Warning:** Running eject is a permanent action (aside from whatever version control system you use). An ejected app will require you to have an [Xcode and/or Android Studio environment](https://facebook.github.io/react-native/docs/getting-started.html) set up.

## Networking

If you're unable to load your app on your phone due to a network timeout or a refused connection, a good first step is to verify that your phone and computer are on the same network and that they can reach each other. Create React Native App needs access to ports 19000 and 19001 so ensure that your network and firewall settings allow access from your device to your computer on both of these ports.

Try opening a web browser on your phone and opening the URL that the packager script prints, replacing `exp://` with `http://`. So, for example, if underneath the QR code in your terminal you see:

```
exp://192.168.0.1:19000
```

Try opening Safari or Chrome on your phone and loading

```
http://192.168.0.1:19000
```

and

```
http://192.168.0.1:19001
```
