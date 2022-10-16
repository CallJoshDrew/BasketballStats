// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { MovieSharp } from "@mui/icons-material"

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}

// Example of functions from Codewithmosh react 16.exercises building a vidly Project
// export function getMovies() {
//   return MovieSharp;
// }

// export function getMovie(id) {
//   return MovieSharp.find(m => m._id === id);
// }