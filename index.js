function saturdayFun(activity = 'roller-skate'){
    if (activity === '' ){
        console.log (`This Saturday, I want to ${activity}!`);
    } else {return (`This Saturday, I want to ${activity}!`);
}
}


const mondayWork = function (activity = 'go to the office'){
    if (activity === ''){
        console.log (`This Monday, I will ${activity}.`);
    } else {return (`This Monday, I will ${activity}.`);
};
}


function wrapAdjective (highlight){
    const emphatic = function (result){
        return `You are ${highlight}${result}${highlight}!`;
    }
    return emphatic;
}