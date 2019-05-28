//
var name = "hong";
let num = 90;

let flag = true < 10;
let now = new Date();

const log = console.log;

function f1(){
    let name = 'f1.name';
    console.log(name);
    alert(name);
}

const f2 = function(a){
    if(a == 'yes'){
        alert(a);
    }
}

var array = ['lee','ko','park','jeong',22,new Date()];

log('--- test ---');
for(let item of array){
    log(item);
}

array.forEach(i=>log(i));

let aa = 'aa';
let bb = 'bb';
{
    log(aa);
    let aa ='(aa)'
    /* code is error. (sol) declaring is first. */
    log(bb);
} 