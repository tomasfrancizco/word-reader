const textarea = document.getElementById("textarea");
const output = document.getElementById("output");
const startBtn = document.getElementById("start-btn");

let id;
let start = false;
let index = 0;
let beenPaused = false;

function print(){
  if(textarea.value){
    start = true;
    const arr = textarea.value.split(" ");
    id = setInterval(() => {
      if(index < arr.length){
        output.innerHTML = arr[index];
        index++;
      }
    }, 200)
  } else {
    const error = "Please type something to read!";
    output.innerHTML = error;
    output.style.fontSize = "20px";
  }   
};

function pause(){
  if(start == true){
    clearInterval(id)
    startBtn.innerHTML = "Continue"
  }
}