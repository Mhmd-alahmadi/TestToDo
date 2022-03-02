
let tasks = []
let tasksContainer
let taskInput

function createNewTask() {

  if (taskInput.value.trim() == '') {
  
    alert("Pelase entre a Task first");    
  } else {

      saveTask(tasksContainer.getElementsByClassName('task').length, taskInput.value.trim())  
      tasksContainer.innerHTML += buildTask(tasksContainer.getElementsByClassName('task').length, taskInput.value.trim(), 0)
      taskInput.value = ""
  }
}


function buildTask(id, title, isComplete) {

return `
      <div id="${id}Task" class="task" style="${isComplete ? "text-decoration: line-through;" : ""}">
      <span id="${id}Para">
      ${title}
      </span>
      <div class="ButtonDiv">  
            <button onclick="decorateText(${id})" class="btn btn-primary mb-3">
      <i class="bi bi-trash"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check" >
  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
</svg></i>
      </button>
      <button  onclick="deleteTask(${id})" class="btn btn-primary mb-3">
      <i class="bi bi-trash"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash" >
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg></i>
</button>
</div>
      </div>
      `
}

function saveTask(id, task) {
	

	tasks.push(
	{
	 id: id,
	 title: task,
	 isComplete: 0
	 })
	 
	 localStorage.setItem("myArray", JSON.stringify(tasks))
}


function deleteTask(index) {

  let task = document.getElementById(`${index}Task`);
  task.parentNode.removeChild(task)
  
  //search in tasks ids using index
    tasks.forEach(function(task, i){
  	if (task.id == index) {
  		tasks.splice(i)
  	} //end if
  })

  //update loaclStorage
   	 localStorage.setItem("myArray", JSON.stringify(tasks))
}

function decorateText(index) {

   
  document.getElementById(`${index}Para`).style.textDecoration = "line-through";
  //search in tasks ids using index  
  tasks.forEach(function(task){
  	if (task.id == index) {
	  	task.isComplete = !task.isComplete
	  	return
  	} //end if
  })
  
  //update loaclStorage
  	 localStorage.setItem("myArray", JSON.stringify(tasks))
}

function initialApp() {

	tasksContainer = document.getElementById("Tasks")
	taskInput = document.getElementById("InputTask")

	if (localStorage.getItem("myArray") != null) {
		tasks = JSON.parse(localStorage.getItem("myArray"))
		tasks.forEach(function(task) {
				document.getElementById("Tasks").innerHTML += buildTask(task.id, task.title, task.isComplete);
		})
	}  
}

