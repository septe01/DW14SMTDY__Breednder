# Breednder
Now there is a matchmaking application for your pet with the name Breednder. This website based application is made with ReactJs. where you can find your animal pairs by right swipe for likes and left swipe for dislikes.

## Table of Contents
* [Getting Started][#getting-started]
	* Prerequisites 
	* Installation
	* Server Setup
	* Client Setup



## Getting Started

[#getting-started]: #getting-started

Screenshots
Built With
Author
License

Getting Started
Before starting to install the project, there're some things that need to be done first.

Prerequisites
Make sure all of these are properly installed in your system.

Application	Download
Git	Windows / Linux
Node.js	Link
React Native	Link
MySQL	Link
Installation
First, clone this repository into your system.

git clone https://github.com/exneval/cohype.git
Then, install all the packages that described in package.json of both client and server directories.

npm install
Server Setup
For the server setup, first, make sure your MySQL services is running fine. In server directory, you'll find config.json inside config folder. Open and edit the development configuration to match your database setup.

  "development": {
    "username": "root",
    "password": null,
    "database": "database_development",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  },
After completing the database configuration setup, migrate all the required tables.

npm run build
We also need to configure some environtment variables for the server, let's create .env file in server's root project, open and edit it, then input the code below.

SECRET_KEY=ThisIsTheSecretKey
BASE_URL=http://192.168.1.1:3000/
For the SECRET_KEY you can custom it as you wish. But, for BASE_URL make sure it is matched to your local network Internet Protocol.

And for the last step, running the server

npm start
Client Setup
For the client setup, if you are using physical device to run the app, make sure your ADB drivers already installed or you can use Android Emulator from AVD (Android Virtual Device) Manager of Android Studio (This part should be done while installing the React Native framework)

Before running the application, we need to configure an environtment variable for the client, let's create .env file in client's root project, open and edit it, then input the code below.

BASE_URL=http://192.168.1.1:3000/api/v2
Note that the variable BASE_URL above is your server network Internet Protocol. If you are using physical device, make sure your physical device and server computer have a same network connection.

Then, install and run the application.

For IOS :

npm run ios

And for Android :

npm run android

Wait till the application is installed and run into your device. Now, you can explore coHyPe and its features. Enjoy!

Screenshots


Built With
React Native - Front-end
Express JS - Back-end
MySQL - Database
Author
Tri Aginta Ginting - exneval

License
This project is licensed under the GNU General Public v3.0 License - see the LICENSE file for details