## Notes and Learnings

### Git still tracking Pod files in ios (alredy added in .gitignore)

> add `**/Pods` to .gitignore file
> or add your `Pods` file path to .gitignore

---

### React native vector icons in IOS setup
> https://github.com/oblador/react-native-vector-icons
- delete the `build` folder of from `ios` directory
- you can perform `pod deintegrate` then `pod install`
```
rm -rf ~/Library/Developer/Xcode/DerivedData   
```
- you can run the above command to delete previous Derived data
- open `RbcMessManager.xcworkspace` file in the xcode, drag and drop the `fonts` folder to **RbcMessManager** file
- open `info.plist ` file in vs code add this lines
  ```
  <key>UIAppFonts</key>
    <array>
    <string>AntDesign.ttf</string>
    <string>Entypo.ttf</string>
    <string>EvilIcons.ttf</string>
    <string>Feather.ttf</string>
    <string>FontAwesome.ttf</string>
    <string>FontAwesome5_Brands.ttf</string>
    <string>FontAwesome5_Regular.ttf</string>
    <string>FontAwesome5_Solid.ttf</string>
    <string>FontAwesome6_Brands.ttf</string>
    <string>FontAwesome6_Regular.ttf</string>
    <string>FontAwesome6_Solid.ttf</string>
    <string>Foundation.ttf</string>
    <string>Ionicons.ttf</string>
    <string>MaterialIcons.ttf</string>
    <string>MaterialCommunityIcons.ttf</string>
    <string>SimpleLineIcons.ttf</string>
    <string>Octicons.ttf</string>
    <string>Zocial.ttf</string>
    <string>Fontisto.ttf</string>
    </array>
  ```
- React native's auto linking may cause build error
- create `react-native.config.js` file and add
  ```
    module.exports = {
    dependencies: {
        'react-native-vector-icons': {
        platforms: {
            ios: null,
        },
        },
    },
    };
  ```
- then run `nx run-ios project-name`
> **References**
> - https://stackoverflow.com/questions/59007640/build-failing-for-react-native-ios-multiple-commands-produce-error
> - https://stackoverflow.com/questions/55235825/error-failed-to-build-ios-project-we-ran-xcodebuild-command-but-it-exited-wit
> - https://stackoverflow.com/questions/50718018/xcode-10-error-multiple-commands-produce


---

### Deployment of NodeJs api to AWS EC2 instance

- First launch an EC2 instance with your desired configurations
- `chmod 400 instance-key.pem`
- `ssh -i "instance-key.pem" ubuntu@<host_ip or public_DNS>`
- assuming that you can successfully ssh to your Ec2 instance
- `sudo apt update`
- `sudo apt upgrade`
- `sudo apt install nodejs`
- `sudo apt install npm`
- if node version is old after running `node --version` you can upgrade your node version 
- `sudo npm i -g n`
- `sudo n stable`
- then restart your host terminal or you can run `hash -lr` then test node version by `node --version`
- for process management we can install (for nodejs) `sudo npm i -g pm2`
- clone your repository using `git clone`
- then `npm i` or `npm ci` where `ci` is for clean install
- build your project, now we have to start our process
 by `pm2 start relative/path/to/your/build/file/main.js`

> **Note**
> /dist/file/path/main.js  `is for absolute path`
> dist/file/path/main.js `is for relative path respect to your root directory`
> *this two are not same every time*
- once our `pm2` is already running, we can restart these processes

---

#### Environment variables in server (for pm2) 

- to set environment variables through `pm2` we need to have `ecosystem.config.js` file in the project directory of the server
- to create this file `touch ecosystem.config.js` from your root directory of your project
- open that file with `vim or nano` and the following content
  ```
    module.exports = {
    apps: [
        {
        name: 'rbc-mess-api',
        script: 'dist/apps/rbc-mess-api/main.js',
        env: {
            S3_BUCKET:"randomS3Key-9091"
        },
        },
    ],
    };
  ```
- the **script** is the same as `pm2 start ...` or `pm2 restart ...`
- if we have declared this `ecosystem.config.js` file then we can run `pm2 start ecosystem.config.js` or `pm2 restart ecosystem.config.js`
- pm2 will automatically run the script and load the `env` we have declared which can then be accessible to our app by `process.env`
- **NOTE** - `ecosystem.config.js` should be mentioned in the `.gitignore` file so git don't track the file when we add that in our server project directory
- your need to run `pm2 restart ecosystem.config.js` after updating env inside `ecosystem.config.js` file

---
**Reboot server from terminal** 
> sudo reboot

`NOTE -> stopping and starting of instance from AWS console will change your public ip address`

---