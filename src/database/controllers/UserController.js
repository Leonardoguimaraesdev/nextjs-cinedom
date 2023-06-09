import User from '../schemas/UserSchema'

import database from '../db'


const saveUser = async (queryUser) => {
    try {
        if (!database.connect()) return false;

        const newUser = new User(queryUser);
        await newUser.save();

        return true;
    } catch (error) {
        console.error('Erro ao salvar usuário:', error);
        return false;
    }
};

const readUser = async (queryUser) => {
    console.log("Estou pronto para fazer a leitura")
    try {
        if (!database.connect()) return false;

        const users = await User.findOne(queryUser);
        console.log("Após leitura")

        return users;
    } catch (error) {
        console.error('Erro ao ler usuários:', error);
        return false;
    }
};

const userController = {
    saveUser,
    readUser
}

export default userController