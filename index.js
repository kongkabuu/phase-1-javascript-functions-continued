// code your solution here
function saturdayFun(string = "roller-skate"){
    return `This Saturday, I want to ${string}!`;
}

let mondayWork = function (string = "go to the office"){
    return `This Monday, I will ${string}.`;

}

function wrapAdjective(str){
    return function(string = "awsome"){

        return `You are ${str}${string}${str}!`;
    }

}