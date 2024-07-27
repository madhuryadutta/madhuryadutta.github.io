import React, { useEffect, useState } from 'react';
import axios from 'axios';

const About = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/about')
            .then(response => setData(response.data))
            .catch(error => {
                console.error('Error fetching data:', error);
                setError("Oops! We couldn't fetch the about page data. Please try again later.");
            });
    }, []);

    if (error) return (
        <div className="error-message text-center mt-5">
            <h1 className="display-4">🚨 Oops! Something went wrong...</h1>
            <p>{error}</p>
            <img src="/images/error.gif" alt="Error Icon" className="img-fluid" />
        </div>
    );

    if (!data) return (
        <div className="loading-message text-center mt-5">
            <h1 className="display-4">⏳ Loading... Please be patient!</h1>
            <p>Your about page is almost ready. Just a moment!</p>
            <img src="/images/loading.gif" alt="Loading Icon" className="img-fluid" />
        </div>
    );

    return (
        <div>
            <h1>About Me</h1>
            <p>{data.bio}</p>
            <h2>My Journey</h2>
            <p>{data.journey}</p>
        </div>
    );
};

export default About;
