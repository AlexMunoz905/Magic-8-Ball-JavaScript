# Magic-8-Ball-Javascript

1. Gets Input and sets it as a variable.
2. Sets 8 variables with possible answers.
3. Prints the Input variable and one of the possible answers.


You can use this in other ways:
Food Example:
HTML
```html
  <div id="input">
    <input type="text" placeholder="Question?:"><br>
    <button type="button" onclick="answer();">Submit</button>
  </div>
  <div id="answer"></div>
```
Javascript
```javascript
  function answer(){
    var input = document.getElementById('input').value;
    var answer = document.getElementById('answer');

    var food1 = "pizza";
    var food2 = "salad";

    var choice = [food1, food2],
      foodChoice = values[Math.floor(Math.random() * values.length)];
    answer.innerHTML = foodChoice
  }
```
OUTPUT ON PAGE
```
  pizza
```
