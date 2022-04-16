$(function () {
  $("#slider-range").slider({
    range: true,
    min: 0,
    max: 400,
    values: [89, 400],
    slide: function (event, ui) {
      $("#amount").val("$" + ui.values[0]);
      $("#amount-2").val("$" + ui.values[1]);
    }
  });
  $("#amount").val("$" + $("#slider-range").slider("values", 0));
  $("#amount-2").val("$" + $("#slider-range").slider("values", 1));
});


// =================number next btn====================

const myInput1 = document.getElementById("my-input-1" );
const myInput2 = document.getElementById("my-input-2" );
const myInput3 = document.getElementById("my-input-3" );
function stepper1 (btn){
  let id = btn.getAttribute("id");
  let min = myInput1.getAttribute("min");
  let max = myInput1.getAttribute("max");
  let step = myInput1.getAttribute("step");
  let value = myInput1.getAttribute("value");
  let calcStep = (id == "increment") ? (step*1) : (step* -1);
  let newValue = parseInt(value) + calcStep;

  if(newValue >= min && newValue <=max){
    myInput1.setAttribute("value", newValue);
  }
}
function stepper2 (btn){
  let id = btn.getAttribute("id");
  let min = myInput2.getAttribute("min");
  let max = myInput2.getAttribute("max");
  let step = myInput2.getAttribute("step");
  let value = myInput2.getAttribute("value");
  let calcStep = (id == "increment") ? (step*1) : (step* -1);
  let newValue = parseInt(value) + calcStep;

  
  if(newValue >= min && newValue <=max){
    myInput2.setAttribute("value", newValue);
  }
}
function stepper3 (btn){
  let id = btn.getAttribute("id");
  let min = myInput3.getAttribute("min");
  let max = myInput3.getAttribute("max");
  let step = myInput3.getAttribute("step");
  let value = myInput3.getAttribute("value");
  let calcStep = (id == "increment") ? (step*1) : (step* -1);
  let newValue = parseInt(value) + calcStep;

  
  if(newValue >= min && newValue <=max){
    myInput3.setAttribute("value", newValue);
  }
}