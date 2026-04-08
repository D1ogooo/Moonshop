import express from "express";
import cors from "cors";
import { router } from "./routes/index";
import { conn } from "./configs/database";
import "dotenv/config";

const app = express();

conn();
app.use(cors());
app.use(express.json());
app.use(router);

const PORT = 3333;
app.listen(PORT, () => {
	console.log(`👩‍💻 Server running on port: ${PORT} 👩‍💻`);
});