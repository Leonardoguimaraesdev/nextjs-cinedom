import userController from '../../database/controllers/UserController'

export default async function login(req, res) {
    try {
        const user = await userController.readUser(req.body);

        if (user === null) {
            res.status(402).send('Error');
        } else {
            res.status(200).json(user);
        }
    } catch (error) {
        console.error('Erro ao buscar usuário:', error);
        res.status(500).send('Internal Server Error');
    }
}