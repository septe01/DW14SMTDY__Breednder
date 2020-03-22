# Breednder
Now there is a matchmaking application for your pet with the name Breednder. This website based application is made with ReactJs. where you can find your animal pairs by right swipe for likes and left swipe for dislikes.

## Table of Contents
* [Getting Started][#getting-started]
	*  [Prerequisites][#prerequisites]
	* [Installation][#installation]
	* [Server Setup][#server-setup]
	* [Client Setup][#client-setup]
* [Screenshots][#screenshots]
* [Built With][#built-with]
* [Author][#author]
* License



## Getting Started
Before starting to install the project, there're some things that need to be done first.

### Prerequisites
Make sure all of these are properly installed in your system.

| Application | Download                                                                                              |
| ----------- | ----------------------------------------------------------------------------------------------------- |
| Git         | [Windows](https://gitforwindows.org/ "Windows") / [Linux](https://git-scm.com/download/linux "Linux") |
| Node.js     | [Link](https://nodejs.org/en/download/ "Link")                                                        |
| ReactJS     | [Link](https://reactjs.org/docs/getting-started.html "Link")                                          |
| MySQL       | [ Link](https://www.mysql.com/downloads/ " Link")                                                     |

### Installation
First, clone this repository into your system.

` git clone https://github.com/septe01/DW14SMTDY__Breednder`

Then, install all the packages that described in `package.json` of both `client` and `server` directories.

`npm install`

### Server Setup

For the server setup, first, make sure your MySQL services is running fine. In `server` directory, you'll find `config.json` inside `config` folder. Open and edit the `development` configuration to match your database setup.
```bash
  "development": {
    "username": "root",
    "password": null,
    "database": "database_development",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  },
  ```
After completing the database configuration setup, migrate all the required tables.

`npm run build`

We also need to configure some environtment variables for the server, let's create `.env` file in server's root project, open and edit it, then input the code below.

```bash 
SECRET_KEY=ThisIsTheSecretKey
BASE_URL=http://192.168.1.1:3000/
```
For the `SECRET_KEY` you can custom it as you wish. But, for `BASE_URL` make sure it is matched to your local network Internet Protocol.

And for the last step, running the server

`npm start`

### Client Setup
First `npm install` will be install package module after install  Then, run the application.

`npm start`

Wait till the application is run into your browser. Now, you can explore **Breednder** and its features. Enjoy!

### screenshots

![](https://i.imgur.com/hxZwdVd.png)

![](https://i.imgur.com/EhBTjfK.png)

![](https://i.imgur.com/r7iN6Vq.png)

![](https://i.imgur.com/E2biQWP.png)


### Built With

* [React JS](https://reactjs.org/docs/getting-started.html "ReactJS") - Front-end
* [Express JS ](https://expressjs.com/en/starter/installing.html "Express JS ")- Back-end
* [MySQL](https://www.mysql.com/downloads/ "MySQL") - Database

### Author

#### SepteHabudin  - [septe01](https://github.com/septe01/ "septe01")

[#getting-started]: #getting-started
[#prerequisites]: #prerequisites "prerequisites"
[#installation]: #installation "Installation"
[#server-setup]: #server-setup "Server Setup"
[#client-setup]: #client-setup "Client Setup"
[#screenshots]: #screenshots "Screenshots"
[#built-with]: #built-with "Built With"
[#author]: #author "Author"