# Postman and Express Middleware

# Postman 

what is 404 ?
Http standard status response code

# HTTP Response Status Code:

1. Informational Response = 100 - 199
2. Successful Response = 200 - 299
3. Redirection Message = 300 - 399
4. Client error Response = 400 -499
5. Server Error Response = 500 - 599

https://developer.mozilla.org/en-US/docs/Web/HTTP/status

# Express Middleware 

- well, it is kind of something that just sit in between the raw requests that come in.
- So, when a request comes in to server and befor it gets processed by all if the route handler, middleware can with the requests befor they get processed.

# work of Express Middleware 
1. Pre-processing of request - eg. body parser
2. Authentication
3. login to request handlers - eg. morgan
4. Error detection

# body parser 

https://www.npmjs.com/package/body-parser 

import bodyParser from "body-parser";
app.use(bodyParser.urlencoded({extended: true}));
app.post("/submit", (req, res) => {
  console.log(req.body);
})

# Custom Middleware

# morgan

https://www.npmjs.com/package/morgan

import morgan from "morgan";
app.use(morgan("tiny"));

# DIY middleware
 



