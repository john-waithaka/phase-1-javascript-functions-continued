// code your solution here


// Implement a function called saturdayFun:
// It should define a function.
// It uses a default argument, 'roller-skate' when no arguments are passed.
// It allows the default argument to be overridden.
function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
  }


// Implement a function called mondayWork:
// It should define a function.
// It uses a default argument, 'go to the office' when no arguments are passed.
// It allows the default argument to be overridden.
  let mondayWork = function(activity="go to the office") {
    return `This Monday, I will ${activity}.`
  }


  //test 3 - Implement a function called wrapAdjective
  let wrapAdjective = function(style="*") {
    return function(adjective="doing well") {
      return `You are ${style}${adjective}${style}!`
    }
  }