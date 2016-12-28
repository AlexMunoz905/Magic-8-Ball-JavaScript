function answer(){
  // Text field input
  var input = document.getElementById('input').value;
  var answer = document.getElementById('answer');

  // 8 possible answers
  var one = "Yes";
  var two = "No";
  var three = "Only yes if you work hard!";
  var four = "Work harder = yes";
  var five = "ERR: Try Again";
  var six = "That question remains unanswered";
  var seven = "No is the only answer I have ever given";
  var eight = "Are you crazy, that is not legal!"

  // From stackoverflow: http://stackoverflow.com/questions/14422233/how-do-you-select-a-random-variable-within-a-function-in-javascript
  var values = [one, two, three, four, five, six, seven, eight],
            valueToUse = values[Math.floor(Math.random() * values.length)];
  answer.innerHTML = valueToUse
}
