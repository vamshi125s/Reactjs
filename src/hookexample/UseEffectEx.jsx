import React, { useEffect, useState } from "react";
const UseEffectEx = () => {
    // const [count, setCouunt] = useState(0);
    // useEffect(()=>{
    //     setTimeout(()=>{
    //         setCouunt(1000);
    //     },5000);
    //     document.title = count;
    // },[])

    // Api fetching**********
    const [users, setUsers]=useState([]);
    console.log(users);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json().then(data=>{
            // console.log(data);
            setUsers(data);
        }))
        .catch(err=>console.log(err))
    },[])

    return (
        <div className="parent">UseEffectsEX
            {/* <h1>{count}</h1> */}
            {
                users.map((user , index)=>{
                    return (
                        // <>
                        //     <h1>{user.name}</h1>
                        //     <h3>{user.email}</h3>
                        // </>
                        <React.Fragment key={index}>
                            <h1>{user.name}</h1>
                            <h3>{user.email}</h3>
                        </React.Fragment>
                    )
                })
            }
        </div>
    )
}
export default UseEffectEx
