import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [formResponse, setFormResponse] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:8000/contact', new URLSearchParams(formData));
            setFormResponse(response.data.message);
        } catch (error) {
            console.error('Error submitting contact form:', error);
            setFormResponse("Uh-oh! We couldn't send your message. Please try again later.");
        }
    };

    return (
        <div>
            <h1>Contact Me</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="form-control"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="form-control"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="form-control"
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
                {formResponse && <p>{formResponse}</p>}
            </form>
        </div>
    );
};

export default Contact;
