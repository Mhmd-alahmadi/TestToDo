var CounterTask = 0;
var Para = 0;
var CounterTaskDelete = 0;
var CounterLoaclStoarg = [];
function CreateNewTask() {
  if (document.getElementById("InputTask").value == 0) {
    alert("pelase Entre a Task");
  } else {
    document.getElementById("Tasks").innerHTML += `
      <div id=${CounterTaskDelete++ + "Task"} class ="task">
      <P id=${Para++ + "Para"}>
      ${document.getElementById("InputTask").value}
      </P>
      <div class="ButtonDiv">  
            <button id= ${CounterTask++}  onclick="TextDecoration(${CounterTask})" class="btn btn-primary mb-3">
      <i class="bi bi-trash"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check" >
  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
</svg></i>
      </button>
      <button  onclick="DeleteTask()" class="btn btn-primary mb-3">
      <i class="bi bi-trash"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash" >
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg></i>
</button>
</div>

      </div>
      `;
  }
}
function DeleteTask() {
  let v = --CounterTaskDelete + "Task";
  var elem = document.getElementById(v);
  elem.parentNode.removeChild(elem);
  return false;
}

function TextDecoration(...x) {
  let v = --x + "Para";
  console.log(v);
  document.getElementById(`${v}`).style.textDecoration = "line-through";
}

function hhh() {
  for (let i = 0; i < CounterTask; i++) {
    let gg = i + "Task";
    CounterLoaclStoarg.push(document.getElementById(`${gg}`));

    localStorage.setItem("myArray", CounterLoaclStoarg[i].outerHTML);
  }
}
function codeAddress() {
  document.getElementById("Tasks").innerHTML += localStorage.getItem("myArray");
}
//localStorage.setItem(key, annotatedtext.outerHTML);
/*function hhh() {
  for (let i = 0; i < z; i++) {
    let gg = i + "dd";

    ff[i] = document.getElementById(`${gg}`);
    console.log(ff);
  }
  
}

// Store an array in local storage

// The array to store

// Store after JSON stringifying (is this a verb?) it

// Get an array from local storage

// Retrieve the array from local storage
var array = localStorage.getItem("myArray");
// Parse it to something usable in js
array = JSON.parse(array);*/
