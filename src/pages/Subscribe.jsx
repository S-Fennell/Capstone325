import { useState, useEffect } from "react"

export default function Subscribe(){

    const [firstName, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
// adding subscribers to my database
    const getData = async (e) => {
        e.preventDefault();
        //connecting to my database
        
        let result = await fetch('http://localhost:3000/subscribers',{
        method: 'POST',
        body:JSON.stringify({firstName, lastName, email}),
        headers:{
            'Content-Type': 'application/json'
            }
        })
        result = await result.json();
        localStorage.setItem('subscriber', JSON.stringify(result));

        setName('')
        setLastName('')
        setEmail('')

        alert('You have subscribed');
    }
 


    return(
        <div className="formConatainer">
            <form onSubmit={getData}>
                <h2>Subscribe</h2>
                <div>
                    <label>First Name</label>
                    <input type="text" className="form-control"
                    value={firstName}
                    onChange={(e)=>setName(e.target.value)}/>
                </div>
                 <div>
                    <label>Last Name</label>
                    <input type="text" className="form-control"
                     value={lastName}
                    onChange={(e)=>setLastName(e.target.value)} />
                </div>
                   <div>
                    <label>Email</label>
                    <input type="email" className="form-control"
                     value={email}
                    onChange={(e)=>setEmail(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-success">Submit</button>
            </form>
            
        </div>
    )
}