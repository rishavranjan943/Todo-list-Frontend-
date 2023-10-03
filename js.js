const todoform=document.querySelector(".form-todo")
const todoinput=document.querySelector(".form-todo input[type='text']")
const todolist=document.querySelector(".todo-list")


todoform.addEventListener("submit",(e) => {
    e.preventDefault()
    const newTodoText=todoinput.value
    const newLi=document.createElement("li") 
    const newLiInnerHtml=`<span class="text">${newTodoText} </span>
    <div class="todo-buttons">
        <button class="todo-btn done">Done</button>
        <button class="todo-btn remove">Remove</button>
    </div>`;
newLi.innerHTML=newLiInnerHtml
todolist.append(newLi)
    todoinput.value=""
    // preventdefault-> escapes page from refreshing
})

todolist.addEventListener("click",(e)=>{
    if(e.target.classList.contains("remove")){
        const targetedli=e.target.parentNode.parentNode;
        targetedli.remove()
    }
    if(e.target.classList.contains("done")){
        const lispan=e.target.parentNode.previousElementSibling;
        lispan.style.textDecoration="line-through"
    }
})