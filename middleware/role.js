const Response = require('../helpers/Response');

const authPage = () => {
    
    return (req, res, next) => {
        const arr = ['ADMIN', 'SALES', 'SHOPMANAGER'];
        const userRole = req.body.role;     
        if(userRole == null || userRole == undefined){
            next();
        }  else {
            if(arr.includes(userRole)){
                next();
            } else {
                res.send(Response(401, "You do not have permisions", [], false));
            }
        }
    }
}

module.exports = { authPage }