import { function_play } from "./classes/meniger_Questions.js";
import { yuser } from "./classes/meniger_user.js";
import * as filelImport from "./Questions/import_all_question.js";
const arr_questions=[filelImport.questions1,filelImport.questions2,filelImport.questions3] 
const yuser_name=new yuser();
function_play(arr_questions);
    




