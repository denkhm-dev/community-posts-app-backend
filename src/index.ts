import cors from "cors";
import express from "express";
import flagsRouter from "./routes/flags";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/flags", flagsRouter);

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
  console.log(`🚩 Flags API: http://localhost:${PORT}/api/flags`);
});
