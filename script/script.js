var btn = document.getElementById("btn");
var bmiResult = document.getElementById('bmi');
var infoP = document.getElementById('infopara');

function cal(){
  var weightI = document.getElementById("weight").value;
  var heightI = document.getElementById("height").value/100;
  if(weightI===0 || heightI===0 ){
    alert("Please fill");
  }else{
    var BMI =  weightI /(heightI * heightI);
    bmiResult.textContent = BMI;
    bmiResult = BMI;
    updateP();
  }
}
function updateP(){
  if(bmiResult < 18.5){
    infoP.textContent = "Twoj wskaźnik BMI wynosi mniej niż 18,5, co oznacza niedowagę.";
    infoP.setAttribute('class','alert-danger alert');
  }else if(bmiResult > 18.5 && bmiResult < 24.99){
    infoP.textContent = "Twój wskaźnik BMI mieści się w normie.";
    infoP.setAttribute('class','alert-successr alert');
  }else{
    infoP.textContent = "Twój wskaźnik BMI wykracza poza 24.99, może to oznacza nadwagę lub otyłość.";
    infoP.setAttribute('class','alert-danger alert');
  }
}

btn.addEventListener('click',cal);