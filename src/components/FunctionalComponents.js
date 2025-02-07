import React from 'react'

function FunctionalComponents(props) {
    console.log(props)
    let applyStyle = props.apply ? "Heading" : " "
    let inlineStyle ={
        color:'green',
        backgroundColor:'red',
        fontSize:'50px'
    }
    return (
    <div>
        <h1 class={`${applyStyle} font-style`}>Welcome to react class {props.clgName},
            {props.city} </h1>
        {props.children}
        <h2 style={inlineStyle}>Good afternoon</h2>
    </div>
    )
}
export default FunctionalComponents
