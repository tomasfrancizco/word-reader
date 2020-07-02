const textarea = document.getElementById("textarea");
const output = document.getElementById("output");
const button = document.getElementById("start-btn");

button.onclick = function(){
  if(textarea.value){
    const arr = textarea.value.split(" ");
    let index = 0;
    let id = setInterval(() => {
      if(index < arr.length){
        output.innerHTML = arr[index];
        index++ 
      }
    }, 1000)
  }   
};