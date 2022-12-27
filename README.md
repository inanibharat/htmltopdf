# HTML to PDF

## Setup

1. Install Node Js
2. Install Yarn
3. Install Android Studio [OS : Windows or Mac] and JDK
4. Install xCode [OS : Mac]

## 1. Install Node Js

1.1 Version of Node.js 15.0.1 or later from this url <https://nodejs.org/en/download/releases/>

## 2. Install Yarn

2.1 Version of Yarn  1.19.1 or later </br>
2.2 Install yarn using this command ```npm install --global yarn``` </br>

## 3. Install Android Studio and JDK

3.1 Download Android Studio version 4.2 or later from this url <https://developer.android.com/studio> </br>
3.2 Download JDK 15.0.2 and install </br>
3.3 Configure the ANDROID_SDK_ROOT environment variable </br>

```
export ANDROID_SDK_ROOT=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_SDK_ROOT/emulator
export PATH=$PATH:$ANDROID_SDK_ROOT/platform-tools
```

## 4. Install xCode

4.1 Download Xcode 13.0 or later from this url <https://apps.apple.com/in/app/xcode/id497799835?mt=12>

## Before run the app

1. Clone this repository ```git clone https://github.com/Atharva-System/rn-shopify.git```
2. yarn install or npm install
3. no required for android
4. For ios development require to login of Apple Developer (<https://developer.apple.com>)
5. ```cd ios && pod install``` for ios  

## Run the app

1. ```yarn android``` or ```npx react-native run-android``` for android
2. ```yarn ios``` or ```npx react-native run-ios``` for ios
3. It is recommended to run `react-native start` command from root project directory.

## For Development

1. For Android
2. For iOS

## 1. For Android

1. Setting up Gradle variables​ and Edit the file ~/.gradle/gradle.properties or android/gradle.properties, and add the following

```
MYAPP_UPLOAD_STORE_FILE=my-upload-key.keystore
MYAPP_UPLOAD_KEY_ALIAS=my-key-alias
MYAPP_UPLOAD_STORE_PASSWORD=*****
MYAPP_UPLOAD_KEY_PASSWORD=*****
```

2. Adding signing config to your app's Gradle config at ```/android/app/build.gradle```

```
signingConfigs {
        release {
            if (project.hasProperty('MYAPP_UPLOAD_STORE_FILE')) {
                storeFile file(MYAPP_UPLOAD_STORE_FILE)
                storePassword MYAPP_UPLOAD_STORE_PASSWORD
                keyAlias MYAPP_UPLOAD_KEY_ALIAS
                keyPassword MYAPP_UPLOAD_KEY_PASSWORD
            }
        }
    }
    buildTypes {
        release {
            ...
            signingConfig signingConfigs.release
        }
    }

```

2. Always clean old build using this command ```./gradlew clean```
3. Create APK file using this command ```./gradlew assembleRelease```
4. File Location ```android/app/build/outputs/apk/release/release.apk```
5. Upload APK file to <https://www.diawi.com>

## 2. For iOS

1. Open file ```taxinvoice.xcworkspace``` in xCode
2. Select Team options from ```Singing and Capabilities```
3. Select scheme and select ```Any iOS Device``` build option from Drop Down in xCode
4. Select Archive from Product Menu from Top Bar menu and wait for done itself
5. open Organizer Menu from Top menu and Chose Archive from list.
6. Click on Distribute App and select ```Development``` and Click Next
7. Uncheck Rebuild from Bitcode and click Next
8. Select Automatically manage singing and Click Next and wait for done itself
9. Click Export at your select location
10. Upload iPA file to <https://www.diawi.com>

## Release to Play store and App store

1. For Android App
2. For iOS App

## 1. For Android App

1. Always clean old build using this command ```./gradlew clean```
2. Change version with incremental number in ```build.gradle``` in ```android/app``` folder
{
  versionCode 1
  versionName "1.0"
}
3. Create AAB file using this command ```./gradlew bundleRelease```
4. File Location ```android/app/build/outputs/bundle/release/app-release.aab```
5. Upload AAB file to <https://play.google.com/console/>

## 2. For iOS App

1. Open file ```taxinvoice.xcworkspace``` in xCode
2. Select scheme and select Any Device option from Drop Down in xCode
3. Select Archive from Product Menu from Top Bar menu and wait for done itself
4. open Organizer Menu from Top menu and Chose Archive from list.
5. Click on Distribute App and select ```App store connect``` and Click Next
6. Select Destination ```Upload``` and Click Next
