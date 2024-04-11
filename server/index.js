import express from "express";
import cors from "cors";
import { connect } from "./src/db/db.js";
import User from "./src/models/User.mjs";
import Project from './src/models/project.mjs'
import multer from "multer";
import Orders from "./src/models/Order.mjs";


const app = express();
app.use(express.json());
app.use(cors());
connect();

const PORT = 4000;

app.post("/orders", async (req, res) => {
    try {
        const { client, projectName, price, status, num, data } = req.body;
        const newProject = new Orders({ client, projectName, price, status, num, data });
        await newProject.save();
        res.status(201).json({ message: `Проект успешно сохранен  ${JSON.stringify(newProject)}` });
    } catch (error) {
        console.error("Error saving project:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

app.get("/orders", async (req, res) => {
    try {
        const datas = await Orders.find();
        res.status(200).json(datas);
    } catch (error) {
        console.error("Error saving project:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

app.patch("/orders", async (req, res) => {
    try {
        const { client, data, status } = req.body
        const order = await Orders.findOne({ client, data, status })
        if (order) {
            order.status = status
        }
        await order.save()
        res.status(201).json({ message: "статус сохранен" });
    } catch (error) {
        console.error("Error saving project:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});


app.post("/register", async (req, res) => {
    try {
        const { username, name, password } = req.body;
        const isUser = await User.findOne({ username });
        if (isUser) {
            return res.status(409).json({ error: "Пользователь с таким именем уже существует" });
        }
        const newUser = new User({ username, name, password });
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
        res.status(200).json({ message: user.name });
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