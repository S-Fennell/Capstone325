import { useState } from "react"
import '../styles/subscribe.css'

export default function Subscribe(){

    const [firstName, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
// adding subscribers to my database

    const getData = async (e) => {
        e.preventDefault();// prevents page form reloading 
        //connecting to my database
        //this ling of reaches my data base to add  new subscribers and uses the post methed to post those new subscribers
        // 'subscribers' in the URLis the path used in my post request path in the backend.
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
 

// the submit button inmy form triggers the getData function and the function runs the code inside that makes
// the request to add the input set in the input field to my data base
// the e.target.value get the value put in the input field which and set using useState.
    return(
        <div className="formConatainer">
            <div className="form">
                           <form onSubmit={getData}>
                <h2 className="subscribe">Subscribe</h2>
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
                <button type="submit" className="btn">Submit</button>
            </form>
            </div>
 
            
        </div>
    )
}