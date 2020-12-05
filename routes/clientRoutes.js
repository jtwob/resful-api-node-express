const router = require("express").Router();

router.get("/", (req, res) => {
    console.log("We have been hit!");
    res.json({
        msg: "success",
        status: 200,
        data: { user: "James", title: "Student" },
    });
});


router.get("/client", (req, res) => {
    console.log("We have been hit!");
    res.json({
        msg: "success",
        status: 200,
        data: { isClient: true },
    });
});

module.exports = router;