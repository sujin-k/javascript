let display = document.getElementById("display");
let result = document.getElementById("result");
function input(num){
  display.value+=num;
}
function clearBtn(){
  display.value="";
  result.value="";
}
function resultBtn(){
  cal = eval(display.value);
  result.value = cal;

}
