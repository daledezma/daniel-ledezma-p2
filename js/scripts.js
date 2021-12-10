window.onload= function(){
  document.getElementById('table').style.visibility = "hidden";
  document.getElementById('bmi-result').style.visibility = "hidden";
}

function processForm(){

  var txt_feet = document.getElementById('feet');
  var txt_inches = document.getElementById('inches');
  var txt_weight = document.getElementById('weight');
  var txt_name = document.getElementById('name');
  var txt_age = document.getElementById('age');

  var feet = parseTextToInt(txt_feet);
  var inches = parseTextToInt(txt_inches);
  var weight = parseTextToInt(txt_weight);

  var height = calculateHeight(feet, inches);

  var BMI = BMICalc(height, weight);
  var bmiFinal = analyzeBMI(BMI);

  document.getElementById('table').style.visibility = "visible";
  document.getElementById('bmi-result').style.visibility = "visible";
  var report = [["Name", txt_name.value],
                ["Age", txt_age.value + " [yrs]"],
                ["Height", height + " [in]"],
                ["Weight", weight + " [lbs]"],
                ["BMI", BMI.toFixed(1)]],

  table = document.getElementById('table');
  for(var i = 0; i < table.rows.length; i++)
  {
      for(var j = 0; j < table.rows[i].cells.length; j++)
      {
        table.rows[i].cells[j].innerHTML = report[i][j];
      }
  }
  evalEl = document.getElementById('bmi-result');
  evalEl.innerHTML = bmiFinal;
}


function BMICalc(height, weight){
  var BMItotal = (weight/(height*height)) * 703;
  var BMI = Math.round(BMItotal*100)/100;
  return BMI;
}

function parseTextToInt(input){
  finalValue = parseInt(input.value);
  return finalValue;
}

function calculateHeight(feet, inches){
  height = (feet*12) + inches;
  return height;
}

function analyzeBMI(BMI){
  var eval;
  var text = "Your body mass index is" + " " + BMI + "." + " This indicates that you may be" + " "
  if(BMI < 18.5)
  { eval = "underweight";
  }
  else if (BMI < 25)
  { eval = "at an ideal weight";
  }
  else if (BMI < 30)
  { eval = "overweight";
  }
  else if (BMI > 30)
  { eval = "obese";
  }
  return text + eval
}
