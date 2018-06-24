module.exports = (app) => {
    app.post('/register', (req, res)=>{
        res.send({
            message: `Jsi ${req.body.email} happy and registered `
        });
    });
}
