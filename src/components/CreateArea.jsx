import React, {useState} from "react";

function CreateArea(props) {
    const [note, setNote] = useState({
        title: "",
        content: ""
    })

    function handleChange(event){
        const {name, value} = event.target
        setNote((prevValue) => {
            return {
                title: name === "title" ? value : prevValue.title,
                content: name === "content" ? value : prevValue.content
            }
        })
    }

  return (
    <div>
      <form>
        <input onChange={handleChange} name="title" placeholder="Title" value={note.title} />
        <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={note.content} />
        <button onClick={ (event) => {
            event.preventDefault()
            props.publishNote(note.title, note.content)
            setNote(() => {
            return {
                title: "",
                content: ""
            }
            })
        }}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
