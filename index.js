const express = require("express");
const bodyParser = require('body-parser');
const AdminModel = require('./models/Admin');
const OrderModel = require('./models/Order');
const mongoose = require('mongoose')
const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/freya');
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader("Access-Control-Allow-Methods", ["DELETE", "PUT"]);
    next();
});

const times = [
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
]

app.get("/api/orders", (req, res) => {
    OrderModel.find().then(orders => res.json({ data: orders }))
});

app.get("/api/admin", (req, res) => {
    AdminModel.find().then((admins => res.json({ data: admins })))
});

app.get("/api/orders/:date", (req, res) => {
    const resDate = req.params.date;

    console.log(resDate);
    OrderModel.find({
        date: resDate
    }).then((orders, err) => {
        if (orders){

            let preresult = orders.map(x => x.time)
            res.json({data: times.filter(x => !preresult.includes(x))});
        }
        res.send(err)

    })
});

// POST AUTH ADMIN
app.post("/api/admin/auth", (req, res) => {
    const data = req.body;


    AdminModel.find({
        email: data.email,
        password: data.password
    }).then((admin,err) => {
        if(!!!admin) {
            res.send({data: !!!admin});
        }

        res.send({data: false});
    })



    // for (let x of admins) {
    //     if (x.email === data.email && x.password === data.password){
    //         res.json({data: true});
    //     }
    // }
    // res.send({data: false});
})

// POST REGISTRATION ADMIN
app.post("/api/admin/reg", (req, res) => {
    const data = req.body;
    const admin = new AdminModel({
        email: data.email,
        password: data.password
    });

    admin.save().then(res.json({data: data.email}));
});

// POST ORDERS
app.post("/api/orders/save", async (req, res) => {
    const data = req.body;
    console.log(data);
    const order = new OrderModel({
        date: data.date,
        service: data.service,
        time: data.time,
    });
    console.log(order)
    await order.save().then(res.send("OK"))

});

// DELETE ADMIN
app.delete('/api/admin/delete/:id', (req, res) => {
    AdminModel.deleteOne({
        _id: req.params.id.slice(1)
    }).then(admin => {
        if(admin) {
            res.json({ status: "deleted"});
        } else {
            res.json({ status: "error"});
        }
    })
})

// UPDATE ADMIN
app.put('/api/admin/update/:id', async (req, res) => {
    const result = await AdminModel.findByIdAndUpdate(req.params.id.slice(1), {
            email: req.body.email,
            password: req.body.password
        }
    )
    if (result) {
        res.json( {data: "updated"} )
    }
    else {
        res.json({data: "error"} )
    }
})




app.listen(2023, ()=> console.log('Server running on 2023 port'));


