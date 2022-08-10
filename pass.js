// get all the html code needed 
const passEl = document.getElementById('password'); // will house the generated password
const genEl = document.getElementById('gen'); // The button that generate the pasword when clicked
const passnumEl = document.getElementById('passnum'); //The length of required password

// three different checkboxes
const lowerEl = document.getElementById('lower');
const upperEl = document.getElementById('upper')
const numEl = document.getElementById('num')

//regex to look for number, uppercase and lowercase
const upperRex = /(?=[A-Z]+)/;
const lowerRex = /(?=[a-z]+)/;
const numRex = /(?=[0-9]+)/;
const upperLowerRex = /(?=.*[A-Z]+)(?=.*[a-z]+)/;
const upperNumRex = /(?=.*[A-Z]+)(?=.*[0-9]+)/;
const lowerNumRex = /(?=.*[a-z]+)(?=.*[0-9]+)/;
const allRex = /(?=.*[A-Z]+)(?=.*[a-z]+)(?=.*[0-9]+)/;

//Variable that to store the length of password and an arraye to store all the char set
let value = 0;
let charArray = [];


// Generate an array of character
for (let i = 1; i < 95; i++) {
  charArray.push(String.fromCharCode(i + 32))
}

//listen to the button(generate) when clicked
genEl.addEventListener('click', Generate)


function Generate() {
  value = passnumEl.value; //storing the value of password length to be generated as entered user
  if (value > 0) {

    /*declearing globally and set to empty when the function is called before been assigned anoher value*/
    passGen = "";

    for (let j = 0; j < value; j++) {
      passGen += charArray[Math.floor(Math.random() * charArray.length)]

    }

    //test based on the interest of the user
    if (upperEl.checked && lowerEl.checked && numEl.checked && value > 2) {
      Tester(allRex);

    }
    else if (upperEl.checked && lowerEl.checked && value > 1) {
      Tester(upperLowerRex)

    }
    else if (upperEl.checked && numEl.checked && value > 1) {
      Tester(upperNumRex)

    }
    else if (lowerEl.checked && numEl.checked && value > 1) {
      Tester(lowerNumRex)

    }
    else if (upperEl.checked) {
      Tester(upperRex)

    }
    else if (lowerEl.checked) {
      Tester(lowerRex)

    }
    else if (numEl.checked) {
      Tester(numRex)

    }


  }

  else {
    window.alert("Enter the required password length")
  }
}

function Tester(n) {
  if (n.test(passGen)) {
    passEl.value = passGen;
    return passEl.value;
  }
  else {
    Generate();
  }

}



