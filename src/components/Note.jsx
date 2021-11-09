import React from "react"


function Note(props){
    return (
    <div class="note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button onClick={()=>{
            props.onDelete(props.id)
        }}>DELETE</button>
    </div>)
}

export default Note