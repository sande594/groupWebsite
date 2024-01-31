const quotes = [
    "Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding. - William Paul Thurston",
    "Do not worry about your difficulties in Mathematics. I can assure you mine are still greater. - Albert Einstein",
    "Math is the only place where truth and beauty mean the same thing. - Danica McKellar",
    "The essence of mathematics is not to make simple things complicated, but to make complicated things simple. - Stan Gudder",
    "Arithmetic is where numbers fly like pigeons in and out of your head. - Carl Sandburg"
  ];
  
  let quoteIndex = 0;
  const quoteContainer = document.getElementById('quote-container');
  
  function showNextQuote() {
    quoteContainer.textContent = quotes[quoteIndex];
    quoteIndex = (quoteIndex + 1) % quotes.length;
  }
  
  setInterval(showNextQuote, 5000);
  
  function calculate() {
    const firstNumber = parseFloat(document.getElementById('firstNumber').value);
    const secondNumber = parseFloat(document.getElementById('secondNumber').value);
    const operator = document.getElementById('operator').value; // Get the selected operator
    let result;
  
    switch (operator) {
      case '+':
        result = firstNumber + secondNumber;
        break;
      case '-':
        result = firstNumber - secondNumber;
        break;
      case '*':
        result = firstNumber * secondNumber;
        break;
      case '/':
        result = firstNumber / secondNumber;
        break;
      case '**':
        result = firstNumber ** secondNumber;
        break; 
      case '%':
        result = firstNumber * (secondNumber/100);
        break; 
        
      default:
        result = "Invalid Operator";
    }
  
    document.getElementById('result').textContent = result;
  }
  
  function reset() {
    document.getElementById('firstNumber').value = '';
    document.getElementById('secondNumber').value = '';
    document.getElementById('result').textContent = '';
  }
  