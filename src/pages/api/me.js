import jwt from 'jsonwebtoken';


export default async function me(req, res) {

    const tokenKey = process.env.SECRET
    const token = req.body

    const decodedUser = jwt.verify(token, tokenKey)

    res.status(200).json(decodedUser)
}