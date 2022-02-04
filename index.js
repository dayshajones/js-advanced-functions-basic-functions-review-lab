// Your code here
saturdayFun("play");

function saturdayFun(activity = "roller-skate") {
    return (`This Saturday, I want to ${activity}!`);
}

function mondayWork(activity = "go to the office") {
    return (`This Monday, I will ${activity}.`);
}

function wrapAdjective(flair="*") {
    return function(adj="special") {
      return `You are ${flair }${adj}${flair}!`;
    }
  }

const Calculator = {
    add: function(a, b){
        return a+b;
    },
    subtract: function(a, b){
        return a-b;
    },
    multiply: function(a, b){
        return a*b;
    },
    divide: function(a, b){
        return a/b;
    }
}

function actionApplyer (startingPoint, fns) {
    for (let i = 0; i < fns.length; i++) {
        startingPoint = fns[i](startingPoint);
    }
    return startingPoint;
}