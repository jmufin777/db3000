module.exports = (app) => {
    app.post('/login', (req, res)=>{
        console.log('aaaaaaa')
        res.send({

            message: `Jsi ${req.body.login} a ${req.body.password}  happy and registered `
        });
    });
}
