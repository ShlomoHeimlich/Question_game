import readline from 'readline-sync';
// import Riddle  from './meniger.js';
export class yuser
{
    constructor(name=this.name_yuser())
    {
    this.yuser_name=name;    
    this.arr_time=[] 
    }
    name_yuser(){
          return readline.question('What is your name?');
        }
}

