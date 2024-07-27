import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GenericPage = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/generic')
            .then(response => setData(response.data))
            .catch(error => {
                console.error('Error fetching data:', error);
                setError("Oops! We couldn't fetch the data. Please try again later.");
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
            <p>The page you're looking for is almost ready. Just a moment!</p>
            <img src="/images/loading.gif" alt="Loading Icon" className="img-fluid" />
        </div>
    );

    return (
        <div>
            <h1>{data.title}</h1>
            <p>{data.content}</p>
        </div>
    );
};

export default GenericPage;
