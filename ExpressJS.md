# Creating Server using ExpressJS

# ExpressJS 💜
- Javascript Backend Framework
  http://expressjs.com/ 
# node + express
   1. Readability
   2. Less code
   3. Middle wave

# 🚀 Steps to create server using ExpressJS :- 
1. Create Directory
   - $ mkdir "Express Server"
3. Create index.js file
   - $ mkdir "Express Server"
5. Initialize NPM
   - $ npm init -y 
4. install express package
   - $ npm i express
5. write server application in index.js
    
      // 1. import our express module
      import express from "express";
      
      //2. create app variable which is using express object
      const app = express();
      
      //3. in app method listens the port(3000) and callback(Console.log)
      app.listen(3000, () => {
          console.log("Our server is running on port 3000.");
     });
☝️ check out above code 

6. Start server
   - $ node index.js
# 💡 How to check our server actually running on?
  - go to browser write
    http://localhost:3000/


<img width="881" alt="Screenshot 2023-07-26 214836" src="https://github.com/aishwarya0714/FullStackWebDevelopment/assets/136805991/c03aa906-78e5-4667-b363-de632b305e60">

# 💡What is LOCALHOST?

It is simply when we dont have a server on the internet and insted we want to host our server localy. So, making our own computer our server of our website backend and that is the local part of our hossting.

# 💡 what is PORT?

Inside the server Port is kind of bunch of doorson our server computer, and each of these doors have an address.
- to check the port on windows write netstat -ano | findstr "LISTENING" in cmd

# 💡 HTTP Request:
- HyperText Transfer Protocol :- Language that allows computer to talk to eachother.

# 💡 Request Vocab:- 
1. GET - Request server
2. POST - Sending resource to the server. eg. email or pwd to be send to the server
3. PUT - Update method. While you want ot update something by replacing it completely.
4. PATCH - Update method. You want to patch up the resources 
5. DELETE - Delete resource

// using get method to sent request
-
app.get("/", (req,res) => {
    console.log(req.rawHeaders);
    res.send("Hi I am Aishwarya!");
});

# 🚀 nodemon
nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.

- npm i nodemon

☝️ check out above code 

