import React, { useState } from 'react';
// import "../styles/AddTodo.css";

const AddTodo = ({ addTodo }) => {
    const todoHeading = {
        fontSize: '20px' 
    }

    const button = {
        padding: '10px',
        backgroundColor: '#198754',
        fontSize: '15px'

    }

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");


    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title and Description cannot be blank")
        }
        else {
            addTodo(title, desc);
            setTitle("")
            setDesc("")

        }
    }


    return (
        <div className='container my-5'>
            <h3 style={{fontSize: '25px', fontWeight: '600'}}>Add Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label" style={todoHeading}>Todo Title</label>
                    <input type="text" value={title} onChange={(event) => { setTitle(event.target.value) }} className="form-control" id="title" />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label" style={todoHeading}>Todo Desc</label>
                    <input type="text" value={desc} onChange={(event) => { setDesc(event.target.value) }} className="form-control" id="desc" />
                </div>
                <button type="submit" className="btn btn-primary" style={button}>Add Todo</button>
            </form>
        </div>
    )
}

export default AddTodo
