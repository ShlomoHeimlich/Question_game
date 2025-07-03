import readline from 'readline-sync';
import { function_play } from "./riddle.services.js";
import {ReadAllQuestions} from "../questions/import_all_question.js"
export async function Manager(){
    console.log('To create puzzles press 1');
    console.log('To update puzzles press 2');
    console.log('To read puzzles press 3');
    console.log('To delete puzzles press 4');
    let choice= readline.question('What is your name?');
         switch (choice) {
  case "1":
    console.log("בחרת חיבור");
    break;
  case "2":
    console.log("בחרת חיסור");
    break;
  case "3":
    const all_questions=await ReadAllQuestions()
    console.log(all_questions);
    break;
  case "4":
    console.log("להתראות!");
    break;

}
}

