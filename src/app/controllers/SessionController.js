import Jwt  from 'jsonwebtoken';
import User from '../models/User';
import authConfig from '../../config/Auth';

class SessionController {

    async store (req, res) {

        const {email, password } = req.body;
        const user = await User.findOne({where: { email }});
        if(!user)
        {
            return res.status(401).json({error: 'Usuario não existe.'});
        }

        if(!(await user.checkPassword(password)))
        {
            return res.status(401).json({error: 'Login ou senha incorretos.'});
        }

        const { id, name } = user;

        return res.json({
            user:{
                id,
                name,
                email,
            },
            token: Jwt.sign({ id }, authConfig.secret,{
                expiresIn: authConfig.expiresIn,
            })
        });
    }
}

export default new SessionController();
