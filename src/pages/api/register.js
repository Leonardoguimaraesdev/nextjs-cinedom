import userController from '../../database/controllers/UserController'

export default async function register(req,res) {
    const response = await userController.saveUser(req.body)
    .then((data) => {
        console.log(data)
    })
    .catch(err=> {
        console.log(err)
    })
    res.status(200).json(response)
}