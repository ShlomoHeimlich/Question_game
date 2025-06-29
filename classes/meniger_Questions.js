import readline from 'readline-sync';
function play(q,arr_time){
    
    let answer=false;
    while(!answer){
    const start = new Date();
    console.log(q.taskDescription)
    const answer_yser=readline.question('What is your answer?');
       if(answer_yser==q.correctAnswer){
            answer=true
            const stop = new Date();
            arr_time.push((stop-start)/1000)
            return;
        }
    }
}

class Riddle{
        constructor(qusetion){
        this.id=qusetion.id;
        this.name=qusetion.name;
        this.taskDescription=qusetion.taskDescription;
        this.correctAnswer=qusetion.correctAnswer; 
}}


export function function_play(arr_questions){
   const list_Questions=creat_Questions(arr_questions);
   const arr_time=[]
   list_Questions.forEach(q => play(q,arr_time))
   let time=0;
   const all_time=arr_time.forEach(t=> (time+=t))
   console.log(`all time ${time}`)
   console.log(`The average time to answer a question is ${time/3}`)
}

function creat_Questions(arr_questions)
    {
        const arr=[];
        arr_questions.forEach(q =>arr.push(new Riddle(q)))
        return arr;
}



