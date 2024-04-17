import express from "express";
import cors from "cors";
import { connect } from "./src/db/db.js";
import User from "./src/models/User.mjs";
import multer from "multer";
import Orders from "./src/models/Order.mjs";
import Project from "./src/models/project.mjs";
import bodyParser from "body-parser";
import nodemailer from 'nodemailer'

const app = express();
app.use(express.json());
app.use(cors());
app.use('/uploads', express.static('uploads'));
connect();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const PORT = 4000;

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        const fileName = file.originalname.replace(/\s+/g, '_');
        cb(null, fileName);
    }
});
const upload = multer({ storage: storage });

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

app.patch("/orders/:orderId", async (req, res) => {
    try {
        const orderId = req.params.orderId;
        const { status } = req.body;

        const order = await Orders.findById(orderId);
        if (!order) {
            return res.status(404).json({ error: "Order not found" });
        }

        order.status = status;
        await order.save();

        res.status(200).json({ message: "Status updated successfully" });
    } catch (error) {
        console.error("Error updating status:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});


app.delete("/orders/:orderId", async (req, res) => {
    try {
        const orderId = req.params.orderId;

        const deletedOrder = await Orders.findByIdAndDelete(orderId);
        if (!deletedOrder) {
            return res.status(404).json({ error: "Order not found" });
        }

        res.status(200).json({ message: "Order deleted successfully", deletedOrder });
    } catch (error) {
        console.error("Error deleting order:", error);
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
        if (!user || user.password != password) {
            return res.status(401).json({ error: "Invalid username or password" });
        }
        res.status(200).json({ message: user.name });
    } catch (error) {
        console.error("Error logging in:", error);
        res.status(500).json({ error: "Internal server error" });
    }

});

app.delete("/users/:userId", async (req, res) => {
    try {
        const userId = req.params.userId;

        const deletedUser = await User.findByIdAndDelete(userId);
        if (!deletedUser) {
            return res.status(404).json({ error: "Пользователь не найден" });
        }

        res.status(200).json({ message: "Пользователь успешно удален", deletedUser });
    } catch (error) {
        console.error("Ошибка при удалении пользователя:", error);
        res.status(500).json({ error: "Внутренняя ошибка сервера" });
    }
});

app.get("/users", async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        console.error("Ошибка при получении пользователей:", error);
        res.status(500).json({ error: "Внутренняя ошибка сервера" });
    }
});


app.post("/projects", upload.single('photo'), async (req, res) => {
    try {
        const { projectName, price, area, parameters, description } = req.body;
        const photo = req.file.filename;
        const newProject = new Project({ photo, projectName, price, area, parameters, description });
        await newProject.save();
        res.status(201).json({ message: `Проект успешно сохранен  ${JSON.stringify(newProject)}` });
    } catch (error) {
        console.error("Error saving project:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

app.patch("/projects/:projectId", upload.single('photo'), async (req, res) => {
    try {
        const projectId = req.params.projectId;
        const { projectName, price, area, parameters, description } = req.body;

        const project = await Project.findById(projectId);
        if (!project) {
            return res.status(404).json({ error: "Проект не найден" });
        }

        if (projectName) project.projectName = projectName;
        if (price) project.price = price;
        if (area) project.area = area;
        if (parameters) project.parameters = parameters;
        if (description) project.description = description;
        if (req.file) project.photo = req.file.filename;

        await project.save();

        res.status(200).json({ message: "Данные проекта успешно обновлены", updatedProject: project });
    } catch (error) {
        console.error("Ошибка при обновлении данных проекта:", error);
        res.status(500).json({ error: "Внутренняя ошибка сервера" });
    }
});


app.get("/projects", async (req, res) => {
    try {
        const datas = await Project.find();
        res.status(200).json(datas);
    } catch (error) {
        console.error("Error saving project:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

app.delete("/projects/:projectId", async (req, res) => {
    try {
        const projectId = req.params.projectId;

        const deletedProject = await Project.findByIdAndDelete(projectId);
        if (!deletedProject) {
            return res.status(404).json({ error: "Проект не найден" });
        }

        res.status(200).json({ message: "Проект успешно удален", deletedProject });
    } catch (error) {
        console.error("Ошибка при удалении проекта:", error);
        res.status(500).json({ error: "Внутренняя ошибка сервера" });
    }
});

app.post('/send-email', (req, res) => {
    const { name, term, area, floors, phone } = req.body;

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'your-email@gmail.com',
            pass: 'your-email-password'
        }
    });

    let mailOptions = {
        from: 'your-email@gmail.com',
        to: 'recipient-email@example.com',
        subject: 'Заявка на сайте',
        text: `
        Имя: ${name}
        Срок: ${term}
        Площадь планируемого здания: ${area}
        Количество этажей или пристроек: ${floors}
        Телефон: ${phone}
      `
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).send('Ошибка отправки письма');
        } else {
            console.log('Письмо успешно отправлено: ' + info.response);
            res.status(200).send('Письмо успешно отправлено');
        }
    });
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});