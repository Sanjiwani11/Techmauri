import React from 'react';
import logo from './logo.jpg';


const ContactForm = () =>{
    const[formStatus, setFormStatus] = React.useState('Send')
    const onSubmit = (e) => {
        e.preventDefault()
        setFormStatus('Submitting...')
        const {name, email, message} = e.target.elements
        let conVal = {
            name: name.value,
            email: email.value,
            message: message.value,
        }
        console.log(conVal)
    }
    return (
        <div className="container mt-5">
            <img src={logo}  style={{width: '100px',}} />
            <h2 className="mb-3">Contact Form</h2>
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label className="form-label" htmlFor="name">Name</label>
                    <input className="form-control" type="text" id="name" required />
                </div>

                <div className="mb-3">
                    <label className="form-label" htmlFor="email">Email</label>
                    <input className="form-control" type="text" id="email" required />
                </div>

                <div className="mb-3">
                    <label className="form-label" htmlFor="message">Message</label>
                    <textarea className="form-control"  id="message" />
                </div>

                <button className="btn btn-danger" type="submit">
                    {formStatus}
                </button>
            </form>
        </div>
    )
}

export default ContactForm