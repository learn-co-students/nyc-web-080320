/*

1. As a user, when I enter text into the task input field and click "Create New Task", the text should appear in a list under "My Todos".

* add a submit listener to the form 
* get data out of the input field
* create an li element with that text
* append that li to the DOM

*/



document.addEventListener("DOMContentLoaded", e => {

  function submitHandler() {
    const taskForm = document.querySelector('#create-task-form')
    
    taskForm.addEventListener('submit', function(e){
      e.preventDefault()

      const form = e.target
      const task = form["new-task-description"].value
      const priority = form.priority.value

      const taskLi = document.createElement('li')

      if(task){
        taskLi.textContent = task
        taskLi.style.backgroundColor = priority
        const button = document.createElement('button')

        button.textContent = 'x'
        taskLi.append(button)

        button.addEventListener('click', function(e){
          e.target.parentNode.remove()
        })
        
        // const taskUl = document.querySelector('#tasks')
        // taskUl.append(taskLi)

        const div = document.querySelector(`#${priority}`)
        div.append(taskLi)
  
        form.reset()
      } else {
        alert("You need to provide a task. Dummy.")
      }

    })
  }

  submitHandler()
});


// IIFE - Immediately Invoked Function Expression 
// (function(){doSomething()})()