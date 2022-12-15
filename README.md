# CRUD - Users - NodeJS 🏁

### 🇬🇧 en
Task for the 4th module of Kenzie Academy Course (Backend)

#### Goals
It is a task that aims to be the first contact with Backend, creating an application of users that can create, list(read), login, update and soft delete.
Also distincts Adm permissions from normal users.

#### Technologies
- NodeJS | Express.js | TypeORM | PostgreSQL | TypeScript

#### Libs
- dotenv | bcryptjs | jsonwebtoken | yup | express-async-errors

#### Tests - Jest.
![image](https://user-images.githubusercontent.com/106614499/207883152-92f38a9f-9e80-4165-bec9-547224fc2109.png)

#### Routes

- Creating New User: /users
![image](https://user-images.githubusercontent.com/106614499/207885389-214eee27-9664-43ec-82e8-38dffaece902.png)

- New session: /login
![image](https://user-images.githubusercontent.com/106614499/207885618-73e1c49a-a1b0-4e17-b1ed-48a0b00c16de.png)

- Get users (Adm permission): /users
![image](https://user-images.githubusercontent.com/106614499/207885916-30790d3c-c17b-4879-9f67-a740fed47f91.png)

- Edit users (Adm permission or resource owner): /users/:id (name, email and/or password)
![image](https://user-images.githubusercontent.com/106614499/207886262-ee5c308f-94ef-4a27-b849-25423ff995cc.png)

- Soft delete users (Adm permission): /users/:id
![image](https://user-images.githubusercontent.com/106614499/207886623-78bad8c6-7be5-4ae7-afa4-655c5ba8fc52.png)
