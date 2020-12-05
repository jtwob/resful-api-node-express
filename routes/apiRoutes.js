const router = require("express").Router();

router.get("/", (req, res) => {
    console.log("We have been hit!");
    res.json({
        msg: "success",
        status: 200,
        data: { user: "James", title: "Student" },
    });
});


router.get("/isActive", (req, res) => {
    console.log("We have been hit!");
    res.json({
        msg: "success",
        status: 200,
        data: { active: true },
    });
});

router.put("/putExample", (req, res) => {
    /**req.body , req.query , req.params */
    console.log(req.body);
    const id = req.body.id;
    console.log(id);
    res.json({
        msg: "success",
        status: 200,
        data: { id: id },
    });
});

router.post("/querystring", (req, res) => {
    console.log(req.query);
    res.json(req.query);
});

router.patch("/parameter/:hash/:name", (req, res) => {
    console.log(req.params);
    res.json({ msg: "success" });
});

module.exports = router;