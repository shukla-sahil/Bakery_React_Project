const express = require('express')
const cors= require('cors')
require("./db/Config")
const User=require('./db/User')
const Product=require('./db/Products')
const multer = require('multer')
const imagemodule = require('./db/imagemodule')
const Review = require('./db/Review')
const app = express()


// const Product=require('./db/Products')
// const mailjet = require ('node-mailjet')
// .connect('****************************1234', '****************************abcd')
const dotenv = require('dotenv');
dotenv.config();
var nodemailer = require('nodemailer');
const { raw } = require('express')
const subscribe = require('./db/Subscribe')
const ProductCart = require('./db/ProductCart')
// const fs= require("fs");
const transporter = nodemailer.createTransport({
  port: process.env.MAIL_PORT,               // true for 465, false for other ports
  host:  process.env.MAIL_HOST,
     auth: {
          user: process.env.MAIL_USERNAME,
          pass: process.env.MAIL_PASSWORD,              
       },
//   secure: true,
  });

app.use(express.json());
app.use(
  cors({
    origin: "https://sweetcakess-weld.vercel.app",
    method: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
  })
);

app.post('/register',async(req,res)=>{
    let checkUser = await User.findOne({email:req.body.email});
    if(checkUser){
      res.status(422).send({ 'message': "User Already exists", 'statusCode': 422 });
        // res.send()
    }else{
        // console.log(checkUser)
        let user = new User(req.body);
        let result = await user.save();
        // to hide the password from register api
        result = result.toObject();
        delete result.password
        console.log(process.env.MAIL_PORT)

        const mailData = {
            from: process.env.MAIL_FROM_ADDRESS,
            to: req.body.email,
            subject: 'Sweet cake Registration',
            text: 'Sweet Cake Registration',
            html: "<h1>You have succesfully registerd on sweets cakes</h1> <br> Thanks <br> Regards <br> Sweet Cakes"
          };
          transporter.sendMail(mailData, function (err, info) {
            if (err)
              console.log(err);
            // else
            //   res.send(getSucessResponse("Post Rejected", userPostData));
          });
          res.send({message:"Congratulations!! you have successfully register on sweet cakes go to login"})  // signup api



    }
})
// login api
app.post('/login',async(req,res)=>{
    if(req.body.password && req.body.email){
    let user = await User.findOne(req.body).select("-password");
    if(user)
    {
        res.send(user)
    }
    else{
        res.send({result: "no user found"})
    }
}else{
    res.send({result: "no user found"})
}
})
// Product list api 
app.get("/products", async (req,res)=>{
  const products = await Product.find(); 
  if(products.length>0){
      res.send(products)
  }else
  {
      res.send({result :"no product found"})
  }
})


app.post('/subscribe',async(req,res)=>{
      let checkSubscribe = await subscribe.findOne({email:req.body.email});
        if(checkSubscribe){
          res.status(422).send({ 'message': "Already subscribed to newsletter", 'statusCode': 422 });
        }
        else{
          let user = new subscribe(req.body);
          let result = await user.save();
         const mailData = {
            from: process.env.MAIL_FROM_ADDRESS,
            to: req.body.email,
            subject: 'Sweet cake Subscription',
            text: 'Sweet Cake Subscription',
            html: "<h1>You have succesfully subscribed on sweet cakes to recieve  newsletter"
          };
          transporter.sendMail(mailData, function (err, info) {
            if (err)
              console.log(err);
          });
          res.send({message:"You have succesfully subscribed on sweet cakes to recieve  newsletter"})
        }
})
app.post('/review',async(req,res)=>{
  // let checkReview = await User.findOne({email:req.body.email});
  // if(checkReview){
  //   res.status(422).send({ 'message': "User Already exists", 'statusCode': 422 });
  //     // res.send()
  // }else{
      // console.log(checkUser)
      let user = new Review(req.body);
      let result = await user.save();
      // to hide the password from register api
      result = result.toObject();
      // delete result.password
      console.log(process.env.MAIL_PORT)
      res.send(result)
      
      // console.log(result);


  // }
})
app.get("/show-reviews", async (req,res)=>{
  const showReviews = await Review.find(); 
  if(showReviews.length>0){
      res.send(showReviews)
  }else
  {
      res.send({result :"no product found"})
  }
})
// Storage
const Storage = multer.diskStorage({
  destination :'uploads',
  filename:(req,file,cb)=>{
    cb(null, file.originalname)
  }
})
const upload = multer({
  storage :Storage
}).single('testImage')

app.post('/upload',(req,res)=>{
  upload(req,res,(err)=>{
  if(err){
console.log(err)
  }
  else{
     const newImage =new imagemodule({
       name:req.body.name,
       image:{
        data:req.file.filename,
        contentType:'image/jpg'
       },
      })
      newImage.save()
      .then(()=> res.send('successfully uploaded'))
      .catch((err) => console.log(err));
       }
    })
})

app.post('/add-to-cart',async(req,res)=>{
  console.log("Jai mata di",req.body);
  if(req.body.userId && req.body.productId){
    if(req.body.addToCart == 1){
      let cartData = new ProductCart({productId:req.body.productId,userId:req.body.userId});
      let result = await cartData.save();
    }
    else{
      let result = await ProductCart.deleteOne({ productId: req.body.productId,userId:req.body.userId });
    }
  res.send({result: "no user found"})
}
})

app.get('/cart',async(req,res)=>{
  const products = await Product.find();
  const productCartData =  await ProductCart.find({userId:req.query.userId});
  let cartArray = [];
  productCartData.map((cartData)=>{
    cartArray.push(cartData.productId);
  });
  console.log(cartArray);
  let result = [];
  if(products && productCartData){
    products.map((productData)=>{
      if(productData){
        if(cartArray.includes(productData._id.toString())){
          result.push(productData);
        }
      }
    })
  }
  if(result.length>0){
      res.send(result)
  }else
  {
      res.send({result :"no items in cart."})
  }
})


app.post('/add-Product', async (req, res) => {
  let product = new Product(req.body);
  let result = await product.save()
  res.send(result)
})

app.delete("/products/:id", async (req, res) => {
  let result = await Product.deleteOne({ _id: req.params.id });
  res.send(result);
})

app.get("/product/:id", async (req, res) => {
  let result = await Product.findOne({ _id: req.params.id })
  if (result) {   
      res.send(result)
  } else {
      res.send({ "result": "no record found" })
  }
})
app.put("/product/:id", async (req, res) => {
  let result =  await Product.updateOne(
      { _id: req.params.id },
      { $set: req.body }
  )
  res.send(result)
})

app.listen(5050)