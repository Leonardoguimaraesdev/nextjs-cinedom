// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import moviesData from '../../../data/movies.json'

export default cors(function handler(req,res) {
  res.status(200).json(moviesData)
})
