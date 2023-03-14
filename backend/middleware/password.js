//importation du password-validator :
const passwordValidator = require('password-validator');

//création du schéma :
const passwordSchema = new passwordValidator ();


//le schéma doit respecter le mot de passe : 
passwordSchema
    .is().min(6)                                 
    .is().max(100)                                  
    .has().uppercase()                              
    .has().lowercase()                              
    .has().digits(2)                                
    .has().not().spaces()                           
    .is().not().oneOf(['Passw0rd', 'Password123']); 



//vérification de la qualité du password par rapport au schéma :
module.exports = (req, res, next) => {

    if(passwordSchema.validate(req.body.password)){
        next();
    }

    else{
        res.status(400).json({error : `Le mot de passe n'est pas assez fort ${passwordSchema.validate('req.body.password', {list: true})}`})
    }
}