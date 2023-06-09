import userController from '../../database/controllers/UserController'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';


export default async function login(req, res) {

    try {
        const { email, password } = req.body
        console.log("Antes de acessar o banco de dadados ")

        const user = await userController.readUser({ email: email });
        console.log("Depois de acessar o banco de dadados ")
        if (user === null) {
            const err = { err: 'E-mail não cadastrado' }
            res.status(404).json(err);
        } else {
            const storedHash = user.password
            const userPassword = password

            bcrypt.compare(userPassword, storedHash, (err, result) => {
                if (err) {
                    console.error(err);
                    return;
                }

                if (result) {
                    const secretKey = process.env.SECRET

                    const { _id } = user
                    const { name } = user
                    const { email } = user

                    const payload = { _id, name, email };

                    const token = jwt.sign(payload, secretKey);
                    
                    res.status(200).json(token);
                } else {
                    const err = { err: 'Senha incorreta' }
                    res.status(404).json(err);
                }
            });


        }
    } catch (error) {
        console.error('Erro ao buscar usuário:', error);
        res.status(500).send('Internal Server Error');
    }
}