import express from "express";
import cors from "cors";
import { connect } from "./src/db/db.js";
import User from "./src/models/User.mjs";
import Project from './src/models/project.mjs'
import multer from "multer";


const app = express();
app.use(express.json());
app.use(cors());
connect();

const PORT = 4000;

const upload = multer({ dest: 'uploads/' });

app.post("/project", upload.single('photo'), async (req, res) => {
    try {
        const { projectName, price, description, area, parameters } = req.body;
        const photo = req.file.path;
        const newProject = new Project({ projectName, photo, price, description, area, parameters });
        await newProject.save();
        res.status(201).json({ message: "Проект успешно сохранен" });
    } catch (error) {
        console.error("Error saving project:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});


app.post("/register", async (req, res) => {
    try {
        const { username, names, password } = req.body;
        const newUser = new User({ username, names, password });
        await newUser.save();

        res.status(201).json({ message: "Пользователь успешно зарегистрирован" });
    } catch (error) {
        console.error("Ошибка регистрации пользователя:", error);
        res.status(500).json({ error: "Внутренняя ошибка сервера" });
    }
});

app.post("/login", async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        if (!user || user.password !== password) {
            return res.status(401).json({ error: "Invalid username or password" });
        }
        res.status(200).json({ message: "Login successful" });
    } catch (error) {
        console.error("Error logging in:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

app.post("/projects", async (req, res) => {
    try {
        const { photo, projectName, price, area, parameters, description } = req.body;
        const newProject = new Project({ photo, projectName, price, area, parameters, description });
        await newProject.save();
        res.status(201).json({ message: `Проект успешно сохранен  ${JSON.stringify(newProject)}` });
    } catch (error) {
        console.error("Error saving project:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});