import React, {useState} from "react";



function Test() {

    const[toggle, setToggle] = useState( false )
    const [name, setName] = useState("")
    function changeToggle() {
        setToggle((previous) => !previous )
    }

    function handleChange(e){
        e.preventDefault()
        const {name,value} = e.target
        setName(e.target.value)
        console.log(name)
        }

    

    return (
        <div>
            <button onClick={changeToggle}>Click me!</button>
            {toggle ? <div> true </div> : <div> false </div>}
            whats your name?
            <input type = "text" value ={name}  name = "name" onChange = {(e) => handleChange(e)}></input>
            <p>hello {name}</p>
        </div>
    )
}

export default Test;