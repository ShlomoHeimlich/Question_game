import { all_questions } from "./service.js";

export async function handleGetAll(req, res) {
  const riddles = await all_questions();
  res.end(riddles); 
}

// export async function handleGetAll(req, res) {
//   let riddles = await all_questions();
  
//   res.end(riddles); 
// }


