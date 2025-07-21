import { useState } from "react"

export default function Subscribe(){

    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
// adding subscribers to my database
    const getData = async (e) => {
        e.preventDefault();
        //connecting to my database
        let result = await fetch('http://localhost:3000/',{
        method: 'post',
        body:JSON.stringify(name, lastName, email),
        header:{
            'Content-Type': 'application/json'
            }
        })
        result = await result.json;
        localStorage.setItem('subscriber', JSON.stringify(result));
    }



    return(
        <div className="formConatainer">
            <form onSubmit={getData}>
                <h2>Subscribe</h2>
                <div>
                    <label>First Name</label>
                    <input type="text" className="form-control"
                    value={name}
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