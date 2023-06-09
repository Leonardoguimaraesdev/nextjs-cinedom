// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import moviesData from '../../../data/movies.json'
import NextCors from 'nextjs-cors'


export default async function handler(req, res) {
  await NextCors(req, res, {
    // Options
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });
  res.status(200).json(moviesData)
}
