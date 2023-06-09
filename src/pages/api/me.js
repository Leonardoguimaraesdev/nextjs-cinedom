import jwt from 'jsonwebtoken';
import NextCors from 'nextjs-cors'


export default async function me(req, res) {

    await NextCors(req, res, {
        // Options
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        origin: '*',
        optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
     });

    const tokenKey = process.env.SECRET
    const token = req.body

    const decodedUser = jwt.verify(token, tokenKey)

    res.status(200).json(decodedUser)
}