import React,{useState} from 'react'
const Form=(props)=>{
    const [names,setNames]=useState("");

    const handleChange=(e)=>{
    setNames(e.target.value)
    }
    const handleSubmit=(e)=>{
    e.preventDefault()
    props.onSubmit(names);
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={names} onChange={handleChange}/>
                <button type='submit'>Submit</button>
            </form>

        </div>
    )
}
export default Form;