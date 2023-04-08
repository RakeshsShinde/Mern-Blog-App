# Mern blog site ::green_book:
Blog site  with user authentication and authorization using mern stack
#### ![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white) ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)  ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD) 	![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)  ![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
#### ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)  ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white) ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)

**getting started :thumbsup:**
---
- fork current repository and run `git clone<repository_name>` cmd from the git bash /terminal 
- after that,cd into that repository `cd <repository_name>` and install all dependencies using `npm install`
- create `.env ` file  inside `/api` folder and  add `MONGO_URL` i.e your mongodb database url
- run server on port `5000`
- npm start/yarn start

##### you can get `MONGO_URL` from [mongodb atlas](https://www.mongodb.com/atlas/database)
- first you have to register ,then create own cluster 
-  click on `connect` and then `connect to application ` you get `MONGO_URL`


# Demo
#### Home page:

![Screenshot 2023-03-10 10 16 40](https://user-images.githubusercontent.com/84784475/224226203-f82236f0-e0d7-49d7-98d6-10e9a60d168b.png)
---
#### Posts page:
user who have not logged in can see the post of other users but can not edit them or delete them 

![Screenshot 2023-03-10 10 26 38](https://user-images.githubusercontent.com/84784475/224227191-0174a81a-f99a-4234-aadf-49ab9791ab12.png)
---

#### Login page:
users is fully secured becuase user  secret credientials i.e password store in database using the `Hashing` technique using npm package  `bcrypt.js`


![Screenshot 2023-03-10 11 00 08](https://user-images.githubusercontent.com/84784475/224231588-5ff0f5c9-26a2-437f-8ed5-336f69f92046.png)

### Register page :

 ![Screenshot 2023-03-10 11 04 23](https://user-images.githubusercontent.com/84784475/224232144-1426ac0d-7dd1-4f56-b2d8-16b668f64c35.png)

# user module 
#### Home page :

![Screenshot 2023-03-10 11 13 11](https://user-images.githubusercontent.com/84784475/224233390-df6ebda1-8855-447a-a5bf-4cccade624cd.png)

#### Post page :
we can filter the particular user post by clicking on user name 

![Screenshot 2023-03-10 11 16 41](https://user-images.githubusercontent.com/84784475/224233785-8ce8690f-3e83-427c-98b7-23757ff0f7a0.png)

also,filter by category :

![Screenshot 2023-03-10 11 18 12](https://user-images.githubusercontent.com/84784475/224234248-47aa5cc4-d568-4047-a6ce-5fe3c844533b.png)


#### Write Blog/create Blog :
if user have register with system and have logged in ,then user  can create blog post 

![Screenshot 2023-03-10 11 27 50](https://user-images.githubusercontent.com/84784475/224235758-55d776d3-2f2e-49e4-9b3c-382f3c06526b.png)


#### single post :
only authorized user can delete/Edit post which belongs to that user

![Screenshot 2023-03-10 11 32 31](https://user-images.githubusercontent.com/84784475/224236625-f7168c98-1ead-4d0c-b3cf-a6f8713d153c.png)

#### Edit post :
![Screenshot 2023-03-10 11 38 13](https://user-images.githubusercontent.com/84784475/224236988-7f169e07-ea15-4901-a367-b8d46d0746d5.png)


#### Update user details:
user can change there details if they are authorized.

![Screenshot 2023-03-10 11 39 55](https://user-images.githubusercontent.com/84784475/224237293-06f99b62-719e-4e5f-a551-cb88d2139262.png)






