import { function_play } from "./services/riddle.services.js";
import { User } from "./classes/user.js";
import { ReadAllQuestions } from "./server/dal.js"
import { Manager } from "./services/call.server.js"



const yuser_name = new User();
console.log(`hi ${yuser_name.userName}`);
if (yuser_name.userName == 1234) {
   Manager()
}
else {
   const time = function_play(await ReadAllQuestions());
   console.log(yuser_name.userName);
   console.log(`the all time is ${time}`)
   console.log(`The average time to answer a question is ${time / 3}`)
}



