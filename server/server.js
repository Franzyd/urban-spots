const express = require('express')
const app = express()
const db = require("./database.js")

app.get("/api", (req, res) => {
    res.json({ "users": ["userOne", "userTwo", "userThree", "userFour"] })
})

app.get("/api/users", (req, res, next) => {
    const sql = "select * from user"
    const params = []
    db.all(sql, params, (err, rows) => {
        if (err) {
            res.status(400).json({"error":err.message})
        }
        res.json({
            "message":"success",
            "data":rows
        })
    })
})

app.get("/spots", (req, res, next) => {
    const sql = "select * from spot limit 30"
    const params = []
    db.all(sql, params, (err, rows) => {
        if (err) res.status(400).json({"error":err.message})
        res.json({
            "message":"success",
            "data":rows
        })
    })
})

app.listen(5000, () => { console.log("Server started on port 5000") })