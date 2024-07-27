// Footer.js
import React from 'react';
import './Footer.css'; // Include footer-specific CSS

const Footer = () => {
    return (
        <footer className="footer">
            <p className="copy">
                Built with ❤️ by{' '}
                <a href="https://github.com/madhuryadutta" target="_blank" rel="noopener noreferrer">
                    Madhurya Dutta
                </a>
            </p>
        </footer>
    );
};

export default Footer;
