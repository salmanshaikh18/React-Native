## Steps for how to generate apk using React-Native Expo CLI

1. Check Expo CLI is installed or not
```bash
expo -v
```

2. install expo-cli and eas build tools
```bash
npm install --global expo-cli eas-cli
```

3. Create an expo account and login: [Click on me to create or login to expo account]( https://expo.dev/signup)

4. Log in to cmd using expo credentials, Open cmd and run the below command
```bash
expo login
```

5. To check which user are logged in with, use the command
```bash
expo whoami
```

6. If u want a .apk file then we need to create `eas.json`file and add a buildType as apk.
```json
{
  "build": {
    "preview": {
      "android": {
        "buildType": "apk"
      }
    },
    "preview2": {
      "android": {
        "gradleCommand": ":app:assembleRelease"
      }
    },
    "preview3": {
      "developmentClient": true
    },
    "production": {}
  }
}
```

7. Generate build from the app directory
```bash
eas build -p android --profile preview
```

8. Download the apk from the above generated link from expo dev accounts dashboard.
[Now click on me to donwload apk](https://expo.dev/)