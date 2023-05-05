const {User} = require("../db");

const postUser = async (req, res) => {
    try {
        const {email, password} = req.body;
        if(!email || !password){
            throw Error("email or password is empty");
        } else {
            const [user, created] = await User.findOrCreate({
                where: {
                    email: email
                }
            })
            if(!user.id){
                if(created){
                    // res.status(201).json({message: "Registro exitoso"});
                    res.status(200).json({access: true})
                }else{
                    res.status(400).json({message: "Registro fallido"});
                }
            }else if(user.password === password){
                res.status(200).json({access: true})
            } else {
                res.status(403).json({message: "_Contraseña incorrecta_"})
            }
        }
    } catch (error) {
        res.status(500).json({error: error.message})
    }
    
}

module.exports = postUser;