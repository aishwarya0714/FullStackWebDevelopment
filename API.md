# API – Application Programming Interface

API is like set of rules or protocols that defines how different software’s can interact with each other.

* APIs:
1. REST API
2. SOAP

For web REST APIs are mostly used. It uses HTTP protocols.

# API Authentication

 0. No authentication
 1. Basic Authentication
 2. API Key Authorization
 3. Token Based Authentication

### 0. No authentication

* public api
* accessible to everyone

### 1. Basic Authentication

* For example, your are providing your user name and passward to access the API with API provider
* It involves Base64 Encoding - taking text (ASCII) that can be converted into bit then encoding it into charachter

  ##### API that we are using here https://secrets-api.appbrewery.com/

Steps:
1. Open postman
   ![image](https://github.com/aishwarya0714/FullStackWebDevelopment/assets/136805991/c6847ce2-b88c-4b18-ba57-95ac0fd26e00)

2. Get API data using page query parameter
   <img width="628" alt="image" src="https://github.com/aishwarya0714/FullStackWebDevelopment/assets/136805991/58308dc2-4c6a-43e7-8eaa-55238421b8f7">

3. set Authorization basic auth set user name and pass from given register POST request
   <img width="667" alt="image" src="https://github.com/aishwarya0714/FullStackWebDevelopment/assets/136805991/a8c88329-ef81-482c-88d0-adf1e4c7f437">

4. When you go to the Headers you can see the Authorization key is added
   <img width="604" alt="image" src="https://github.com/aishwarya0714/FullStackWebDevelopment/assets/136805991/385e6dc8-c37f-42bb-8f40-6c835d40726b">

you can copy it past in https://www.base64encode.org/ it automatically decode it to original format

