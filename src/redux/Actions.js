import * as Actions from "./ActionTypes"

export function newTask(){
    return {
        type:Actions.AddTask,
        payload:{}
    }
}


export function changeTask(task, index){
    return {
        type:Actions.ChangeTask,
        payload:{
            task:task,
            index:index
        }
    }
}

export function changeTitle(title, index){
    return {
        type:Actions.ChangeTask,
        payload:{
            task:{title:title},
            index:index
        }
    }
}

export function changeDescription(desc, index){
    return {
        type:Actions.ChangeTask,
        payload:{
            task:{description:desc},
            index:index
        }
    }
}

export function deleteTask(index)
{
    return{
        type:Actions.DeleteTask,
        payload:{
            index:index
        }
    }
}

export function toggle(index)
{
    return {
        type:Actions.ToggleTask,
        payload:{
            index:index
        }
    }
}

export function select(index)
{
    return {
        type:Actions.SelectTask,
        payload:{
            index:index
        }
    }
}

export function loadList(Todos)
{
    
    return {
        type:Actions.LoadList,
        payload:{
            Todos:Todos
        }
    }
}