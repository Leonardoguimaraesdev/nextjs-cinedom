import userController from '../../database/controllers/UserController'
import bcrypt from 'bcrypt'
import NextCors from 'nextjs-cors'


export default async function register(req, res) {

    await NextCors(req, res, {
        // Options
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: '*',
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
     });

    try {
        const { email } = req.body
        const user = await userController.readUser({ email: email });

        if (user === null) {

            const { name, email, password } = req.body

            const saltRounds = 10

            bcrypt.hash(password, saltRounds, async (err, hash)  => {
                if (err) {
                    console.error(err);
                    res.status(500).json({ message: 'Erro interno do servidor' });
                    return;
                }

                const data = {
                    name: name,
                    email: email,
                    password: hash,
                };

                const response = await userController.saveUser(data)
                    .then((data) => {
                        console.log(data)
                    })
                    .catch(err => {
                        console.log(err)
                    })


                res.status(200).json(response);
            });

        } else {
            res.status(409).send('Usuário já existe');
        }
    } catch (error) {
        console.error('Erro ao buscar usuário:', error);
        res.status(500).send('Internal Server Error');
    }


}