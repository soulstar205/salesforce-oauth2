import React, {useEffect, useState} from 'react'
import axios from 'axios'


const Contact = ()=>{
    const [contacts, setContacts] = useState([])
    const [values, setValues] = useState({
        name: "",
        email: "",
        fullname: "",
    })

    const inputs =[
        {
            id: 1,
            name: "name",
            placeholder: "Name",
            type:"text"
        },
        {
            id: 2,
            name: "email",
            placeholder: "Email",
            type: "email"
        },
        {
            id: 3,
            name: "phone",
            placeholder: "Phone number",
            type: 'text'
        },
    ]

    // useEffect(()=>{
    //     const fetchContact = async()=>{
    //         const res = await axios.get('')
    //         const cont = res.data
    //         setContacts(cont)
    //     }
    //     fetchContact()
    // },[])

    const onChange=(e)=>{
        setValues({...values, [e.target.name]: e.target.value})
    }

    const handleSubmit = async () => {
        try {
            const postData = await axios.post('', values)
            const res = postData.data
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="container">

            <h2>Contacts</h2>

            <div className="contact-container">
                {
                    contacts.map((contact)=>{
                        return(
                        <>
                        <span>{contact.name}</span>
                        <span>{contact.phone}</span>
                        <span>{contact.email}</span>
                        </>
                        )
                    })
                }
            </div>

            <button>Create new contact</button>

            <form action="/postdata" className="showContact" onSubmit={handleSubmit}>
                {
                    inputs.map((input)=>(
                        <input 
                        key={input.id} 
                        {...input} 
                        value={values[input.name]} 
                        onChange={onChange}
                        />
                    ))
                }
                <button>submit</button>
            </form>

            <div className="contact-display">
            
            </div>
        </div>
    )
}
export default Contact