// local storage
let todoTasks= [];



// addTodoHtml
function addTodoHtml(){
    return(`
        <div class="addTodo">
            <div class= "addTodo-Header">
                <h1> Add Todo</h1>
            </div>
            <div class ="addTodo-Body">
                <div class ="titleImp">
                    <label>Add Todo:  </label>
                    <input type='text' placeholder='Add Todo...' id="inputTitle" >
                </div>
                <div class = 'discriptionSec'>
                    <label>Discription:</label>
                    <textarea id="textArea" name="discription" placeholder="add discription......"></textarea>
                </div>
                <div class= 'details'>
                    <div class="bx">
                        <label> Days To Complete:</label>
                        <input type="number" id="dayToComplete"/>
                    </div>
                    <div class="bx">
                        <label>Is Important:</label>
                        <input type='number' placeholder="1 for yes 0 for no" id='imp'>
                    </div>
                    
                   
                </div>
            </div>
            <button onclick="addTodo()">AddTodo</button>
        </div>    
    `)    
}


// showTodoHtml
function todayHtml(){
    return(`
        <div class="todayTasks">
        <h1 class="title">Today's Task </h1>
        <div class="inner-todayTasks">
        ${
        (todoTasks.filter(tasks => tasks.dayToComplete==1 && tasks.isCompleted!=true)).map(todo=>{
            return(`
                <div class="outerDiv">
                    <div class="innerDiv">
                        <h1>${todo.id}. ${todo.title}</h1>
                        <p>${todo.dis}</p>
                    </div>
                    <div class="buttonDiv">
                        <button onclick="deleteTodo(${todo.id},todayHtml)" id="delt">Delete</button>
                        <button onclick="doneTodo(${todo.id},todayHtml)" id="don">Done</button>
                    </div>
                </div>

            `)
        }).join('')
        }
        </div>   
        </div>  
    `)
}

// upComming html
function upcomingHtml(){
    return(`
        <div class="todayTasks">
        <h1 class="title">Upcomming </h1>
        <div class="inner-todayTasks">
        ${
        (todoTasks.filter(tasks => tasks.dayToComplete>1 && tasks.isCompleted!=true )).map(todo=>{
            return(`
                <div class="outerDiv">
                    <div class="innerDiv">
                        <h1>${todo.id}. ${todo.title}</h1>
                        <p>${todo.dis}</p>
                    </div>
                    <div class="buttonDiv">
                        <button onclick="deleteTodo(${todo.id},upcomingHtml)" id="delt">Delete</button>
                        <button onclick="doneTodo(${todo.id},upcomingHtml)" id="don">Done</button>
                    </div>
                </div>

            `)
        }).join('')
    }
        </div>   
        </div>
    `)
}

// show all html
function allHtml(){
    return(`
        <div class="todayTasks">
            <h1 class="title">All </h1>
        <div class="inner-todayTasks">
        ${
            (todoTasks.filter(todo=>todo.isCompleted!=true)).map(todo=>{
            return(`
                <div class="outerDiv">
                    <div class="innerDiv">
                        <h1>${todo.id}. ${todo.title}</h1>
                        <p>${todo.dis}</p>
                    </div>
                    <div class="buttonDiv">
                        <button onclick="deleteTodo(${todo.id},allHtml)" id="delt">Delete</button>
                        <button onclick="doneTodo(${todo.id},allHtml)" id="don">Done</button>
                    </div>
                </div>
            `)
        }).join('')
        }
        </div>   
        </div>
    `)
}

function completedHtml(){
    return(`
        <div class="todayTasks">
        <h1 class="title">Completed </h1>
        <div class="inner-todayTasks">
        ${
        (todoTasks.filter(todo=>todo.isCompleted==true)).map(todo=>{
            return(`
                <div class="outerDiv">
                    <div class="innerDiv">
                        <h1>${todo.id}. ${todo.title}</h1>
                        <p>${todo.dis}</p>
                    </div>
                    <div class="buttonDiv">
                        <button onclick="deleteTodo(${todo.id},completedHtml)" id="delt">Delete</button>
                    </div>
                </div>
            `)
        }).join('')
    }
        </div>   
        </div>
    `)
}



// menus for navigation and showing datas 
const getParent = document.getElementById("field")
getParent.innerHTML = addTodoHtml()
function showhtml(content){
    getParent.innerHTML= content()
}


// addTodofunction
function addTodo(){
const titleText = document.getElementById("inputTitle")
const discText = document.getElementById("textArea")
const dayToComplete = document.getElementById("dayToComplete")
const isImp = document.getElementById("imp")
    

if(isImp.value !=0 && isImp.value !=1){
    alert("Is Important value should be 1 or 0")
}

if(titleText.value.length !=0 && discText.value.length !=0 && dayToComplete.value.length!=0 && isImp.value.length!=0){
    todoTasks.push({
        id:todoTasks.length==0?1:todoTasks[todoTasks.length-1].id+1,
        title:titleText.value,
        dis : discText.value,
        dayToComplete:dayToComplete.value,
        isImp:isImp.value,
        isCompleted:false
    })
    titleText.value =""
    discText.value =""
    dayToComplete.value=""
    isImp.value=""
    return
}
    alert("enter all the value")

    console.log(todoTasks)
   
}

// deleteTodofunction
function deleteTodo(id,content){
    todoTasks = todoTasks.filter(todo=> todo.id != id)
    getParent.innerHTML= content()
    
}

// done To do function
function doneTodo(id,content){
    (todoTasks.find(todo => todo.id == id )).isCompleted=true;
    todoTasks.filter(todo=>todo.isCompleted !=true)
    getParent.innerHTML= content()

}
