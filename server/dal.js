import { readFile,writeFile} from "node:fs/promises"

export async function ReadAllQuestions(){
    try{
       let all_questions = await readFile("./questions/Questions.json","utf8")
       all_questions=JSON.parse(all_questions)
       return all_questions
    }catch (err){
            console.log(err.message)
    }
}


export async function Writing_To_DB(file_name, input) {
    try {
        writeFile(file_name, input, "utf8")
        console.log('The operation was successful.');
    } catch (err) {
        console.log(err.message);
    }
}