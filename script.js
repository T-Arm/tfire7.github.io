let plussbutton = document.getElementById("addTask");
let removeBtns = document.getElementsByClassName('remove')
let notDoneList = document.getElementById("todo")
let completeBtn = document.getElementsByClassName('check')
let userinput = document.getElementById("input");

function removeTask() {
    let task = this.parentNode.parentNode
    let parent = task.parentNode

    parent.removeChild(task)

}

function completeTask() {
    let task = this.parentNode.parentNode
    let parent = task.parentNode
    let parentId = parent.id

    if (parentId == 'todo') {
       //move to done list
       parent.removeChild(task)
       target = document.getElementById('done')
       target.insertBefore(task, target.childNodes[0])
        
    } else {
        //move to not done list
        parent.removeChild(task)
        target = document.getElementById('todo')
        target.insertBefore(task, target.childNodes[0])
       }
}

function addTask() {
    let input = document.getElementById("input").value;

    let task = document.createElement('li')

    task.appendChild(document.createTextNode(input))
    let liButtons = document.createElement('div')
    let removeBtn = document.createElement('button')
    let completeBtn = document.createElement('button')

    liButtons.className = "liButtons"
    removeBtn.className = 'remove'
    completeBtn.className = 'complete'
    removeBtn.addEventListener("click", removeTask)
    completeBtn.addEventListener('click', completeTask)
//creates the X for the remove Buttons
    let removeX1 = document.createElement('div')
    let removeX2 = document.createElement('div')
    removeX1.className = 'x x1'
    removeX2.className = 'x x2'

//Creeates the check for the delete Buttons
    let complete1 = document.createElement('div')
    let complete2 = document.createElement('div')
    complete1.className = 'check big'
    complete2.className = 'check small'

//adds the task to the list and adds the buttons to the task with the check and X
    task.appendChild(liButtons)
    liButtons.appendChild(removeBtn)
    removeBtn.appendChild(removeX1)
    removeBtn.appendChild(removeX2)
    liButtons.appendChild(completeBtn)
    completeBtn.appendChild(complete1)
    completeBtn.appendChild(complete2)
    notDoneList.appendChild(task);

    userinput.value = ""
    
}
userinput.addEventListener('keypress', function(e) {
    if (e.keyCode === 13) {
        addTask()
        console.log('heil')
    }
})

plussbutton.addEventListener("click", addTask)

