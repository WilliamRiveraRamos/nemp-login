# NEMP login
NEMP (Node, Express, MongoDB, Passport) is a login system that you can easily implement on your web app. The web app was made with Node, Express, MongoDB, Passport and related technologies.

# Use
1. Clone this repo
2. Install **all dependencies** on package.json
3. Install **MongoDB**
3. Create a **/data** directory on **nemp-login** directory
4. Open terminal
5. **cd** to C:\Program Files\MongoDB\Server\4.0\bin
6. Enter **mongod.exe --dbpath="c:\projects\nemp-login\data"**
7. Open another terminal
8. **cd** to C:\Program Files\MongoDB\Server\4.0\bin
9. Enter **mongo.exe**
10. Open terminal and **cd** to nemp-login directory
11. Enter **app.js**
12. Open your browser and **go to localhost:3000**
13. Click Sign Up and create an account
14. Enter the username and password you just created to login
15. Now you have access to the **Secret Page**

Click **Logout** and try to access the **Secret Page** (localhost:3000/secret) and you are **redirected to login page** because you don't logged in yet.

# MongoDB shell

1. Go to the terminal where you have mongo.exe running.
2. Enter **show dbs** to see if the database has been created.
3. Enter **use nempDB** to swith to that database.
4. Enter **show collections**
5. Enter **db.users.find()** to see the username and password you just created.

That's all, You are set!

#### Resources
[Install MongoDB Community Edition on Windows](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/ "Install MongoDB Community Edition on Windows")

[Working with the mongo Shell](https://docs.mongodb.com/manual/mongo/#working-with-the-mongo-shell "Working with the mongo Shell")
