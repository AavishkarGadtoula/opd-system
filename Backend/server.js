const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()

const express = require("express");
const app = express();
const { body, validationResult } = require("express-validator");


const users = [{ name: "Avishkar", email: "gadu@gmail.com", password: 12345 }];

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(express.json());

// app.post("/login", (req, res) => {
//     let  index= -1 ;
//     const { email, password } = req.body;
//     // your logic here
//     for (let i = 0; i < users.length; i++){
//         if (users[i].email == email) {
//             index = i;
//             break
//         }
//     }
//     if (index == -1) {
//         res.json({error:"user email not matched"})
//     } else {
//         if (users[index].password == password) {
//             res.json({data:users[index].name})
//         } else {
//         res.json({error:"user password not matched"})

//         }
//     }

// })
const validate = (req, res, next) => {
  try { 
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
    } else { 
      next();
    }
  } catch (err) {
    res.json({err:err.message})
  }
}

const signUpValidation = [
  body("firstName").isLength({ min: 5 }),
body("lastName").isLength({ min: 5 }),
body("email").isEmail(),
  body("password").isLength({ min: 5 }),]

const loginValidation = [
  // body("firstName").isLength({ min: 5 }),
  // body("lastName").isLength({ min: 5 }),
  body("email").isEmail(),
  body("password").isLength({ min: 5 }),]


app.post(
  "/sign-up",
  signUpValidation,
  validate,
  (request, response) => {
    console.log("here", request.body);
    response.json({ data: "hey there" });
  }
);

app.post(
  "/sign-in",
  loginValidation,
  validate,
  (request, response) => {
    console.log("here", request.body);
    response.json({ data: "helo" });
  }
);

app.get("/test", async(req, res) => {
  // const data = await prisma.test.create({
  //   data: {
  //     name:"gadu"
  //   }
  // })
  const data = await prisma.test.findMany({
   
  });
  res.json(data)

})
app.listen(9000, () => console.log("server running at 9000"));

