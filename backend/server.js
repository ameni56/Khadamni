import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser' ;
import userRouter from './routes/userRoutes.js'
import imageRouter from './routes/imageRouter.js';
import fragranceRouter from './routes/fragranceRouter.js';
import chatRouter from './routes/chatRouter.js';
import likeCommentRouter from './routes/likeCommentRouter.js';
import postFeedRouter from './routes/postFeedRouter.js';
import professionalRouter from './routes/professionalRouter.js';
import teacherRouter from './routes/teacherRouter.js';
import gigRouter from './routes/gigRouter.js';
import jobRouter from './routes/jobRoutes.js';
import orderRouter from './routes/orderRouter.js';
import jobTeacherRouter from './routes/jobTeacherRouter.js';
import withdrawRouter from './routes/withdrawRoute.js';
import pdf from "html-pdf";

import dotenv from "dotenv"
import pdfTemplate from "./documents/index.js";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import cors from "cors"
import { Configuration,OpenAIApi } from 'openai';
const config =new Configuration({
	apiKey:"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",

})
const openai=new OpenAIApi(config);
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const options = {
	height: "42cm",
	width: "35.7cm",
	timeout: "6000",
};


const app = express();
dotenv.config();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(cors())



mongoose.connect("mongodb+srv://admin:admin123@cluster0.tw7fxff.mongodb.net/KhadamniPro?retryWrites=true&w=majority" , {
        useNewUrlParser : true ,
        useCreateIndex : true ,
        useUnifiedTopology : true } , 
        ()=>{console.log("connected to the DB")}
)



// POST route for PDF generation....
app.post("/create-pdf", (req, res) => {
	pdf.create(pdfTemplate(req.body), options).toFile("Resume.pdf", (err) => {
		if (err) {
			console.log(err);
			res.send(Promise.reject());
		} else res.send(Promise.resolve());
	});
});

// GET route -> send generated PDF to client...
app.get("/fetch-pdf", (req, res) => {
	const file = `${__dirname}/Resume.pdf`;
	res.download(file);
});


//endpoint for CHATGPT
app.post("/chat", async(req,res)=>{
	const{prompt}=req.body;
	const completion=await openai.createCompletion({
		model:"text-davinci-003",
		max_tokens:512,
		temperature:0,
		prompt:prompt,
	});
	res.send(completion.data.choices[0].text);
})




app.use('/api/users', userRouter);
app.use('/api/users', imageRouter);
app.use('/api/fragrance', fragranceRouter);
app.use('/api/chat', chatRouter);
app.use('/api/likecomment', likeCommentRouter);
app.use('/api/newsfeed', postFeedRouter);
app.use('/api/professionals', professionalRouter);
app.use('/api/teachers', teacherRouter);
app.use('/api/gigs', gigRouter);
app.use('/api/jobs', jobRouter);
app.use('/api/jobsteacher', jobTeacherRouter);
app.use('/api/orders', orderRouter);
app.use('/api/withdraw', withdrawRouter);





const port = process.env.PORT || 5002;
app.listen(port, () => console.log(`serving at port`, port ));
 

