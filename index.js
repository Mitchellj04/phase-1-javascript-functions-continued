
function saturdayFun(activity = 'roller-skate'){
    return `This Saturday, I want to ${activity}!`
}
saturdayFun();
saturdayFun(activity = 'bathe my dog');

function mondayWork(event = 'go to the office'){
    return `This Monday, I will ${event}.`
}
mondayWork()


 function wrapAdjective(str = "*",){
   return function (name= "a hard worker"){
    //    name = "a hard worker";
    //    part1 = "You are"
       return `You are ${str}${name}${str}!`
       return `${part1} ${str}${str}!`
    }
    
    };

wrapAdjective(" || a dedicated programmer||")
