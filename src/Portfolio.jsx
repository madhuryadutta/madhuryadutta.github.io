import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet-async';
import './Portfolio.css'; // For 90s styling
import 'bootstrap/dist/css/bootstrap.min.css';
import MediaGallery from './MediaGallery'; // Import MediaGallery component
import config from './config';

const Portfolio = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`${config.apiBaseUrl}/portfolio`)
            .then(response => setData(response.data))
            .catch(error => {
                console.error('Error fetching data:', error);
                setError("Oops! It seems our retro time machine hit a snag. We're working on it!");
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
            <img src="/images/loading.gif" alt="Loading Icon" className="img-fluid" />
        </div>
    );

    return (
        <div className="portfolio container">
            <Helmet>
                <title>{data.name}'s Portfolio</title>
                <meta name="description" content={data.bio} />
                <meta name="keywords" content={data.keywords.join(', ')} />
                <meta property="og:title" content={`${data.name}'s Portfolio`} />
                <meta property="og:description" content={data.bio} />
                <meta property="og:image" content={data.image} />
                <meta property="og:url" content={window.location.href} />
            </Helmet>

            <marquee className="marquee" behavior="scroll" direction="left" scrollamount="5">{data.marqueeText}</marquee>

            <header className="bg-success text-white py-3 mb-4 d-flex justify-content-between align-items-center">
                <div className="text-center flex-grow-1">
                    <h1 className="display-4">{data.name}'s Portfolio</h1>
                    <p>{data.bio}</p>
                </div>
                <img src={data.image} alt="Personal Photo" className="personal-photo" />
            </header>

            {/* Content Sections */}
            {data.projects && data.projects.length > 0 && (
                <section>
                    <h2 className="text-danger">Projects</h2>
                    <ul className="list-unstyled">
                        {data.projects.map((project, index) => (
                            <li key={index} className="mb-3">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>}
                            </li>
                        ))}
                    </ul>
                </section>
            )}

            {data.blogs && data.blogs.length > 0 && (
                <section>
                    <h2 className="text-danger">Blogs</h2>
                    <ul className="list-unstyled">
                        {data.blogs.map((blog, index) => (
                            <li key={index} className="mb-3">
                                <h3>{blog.title}</h3>
                                <p>{blog.content}</p>
                            </li>
                        ))}
                    </ul>
                </section>
            )}

            {data.education && data.education.length > 0 && (
                <section>
                    <h2 className="text-danger">Education</h2>
                    <ul className="list-unstyled">
                        {data.education.map((edu, index) => (
                            <li key={index} className="mb-3">
                                <h3>{edu.degree}</h3>
                                <p>{edu.institution} - {edu.year}</p>
                            </li>
                        ))}
                    </ul>
                </section>
            )}

            {data.contact && (
                <section>
                    <h2 className="text-danger">Contact</h2>
                    <p>Email: <a href={`mailto:${data.contact.email}`}>{data.contact.email}</a></p>
                    <p>Phone: {data.contact.phone}</p>
                </section>
            )}

            {data.achievements && data.achievements.length > 0 && (
                <section>
                    <h2 className="text-danger">Achievements</h2>
                    <ul className="list-unstyled">
                        {data.achievements.map((achievement, index) => (
                            <li key={index} className="mb-3">
                                <h3>{achievement.title}</h3>
                                <p>{achievement.description}</p>
                            </li>
                        ))}
                    </ul>
                </section>
            )}

            {data.testimonials && data.testimonials.length > 0 && (
                <section>
                    <h2 className="text-danger">Testimonials</h2>
                    <ul className="list-unstyled">
                        {data.testimonials.map((testimonial, index) => (
                            <li key={index} className="mb-3">
                                <h3>{testimonial.name}</h3>
                                <p>{testimonial.feedback}</p>
                            </li>
                        ))}
                    </ul>
                </section>
            )}

            {data.skills && data.skills.length > 0 && (
                <section>
                    <h2 className="text-danger">Skills</h2>
                    <ul className="list-unstyled">
                        {data.skills.map((skill, index) => (
                            <li key={index} className="mb-3">
                                <h3>{skill.name}</h3>
                                <p>Level: {skill.level}</p>
                            </li>
                        ))}
                    </ul>
                </section>
            )}

            {data.languages && data.languages.length > 0 && (
                <section>
                    <h2 className="text-danger">Languages</h2>
                    <ul className="list-unstyled">
                        {data.languages.map((language, index) => (
                            <li key={index} className="mb-3">
                                <h3>{language.language}</h3>
                                <p>Proficiency: {language.proficiency}</p>
                            </li>
                        ))}
                    </ul>
                </section>
            )}

            {data.certifications && data.certifications.length > 0 && (
                <section>
                    <h2 className="text-danger">Certifications</h2>
                    <ul className="list-unstyled">
                        {data.certifications.map((certification, index) => (
                            <li key={index} className="mb-3">
                                <h3>{certification.title}</h3>
                                <p>Issuer: {certification.issuer} - Year: {certification.year}</p>
                            </li>
                        ))}
                    </ul>
                </section>
            )}

            {data.products && data.products.length > 0 && (
                <section>
                    <h2 className="text-danger">Products</h2>
                    <ul className="list-unstyled">
                        {data.products.map((product, index) => (
                            <li key={index} className="mb-3">
                                <h3>{product.title}</h3>
                                <p>{product.description}</p>
                                {product.link && <a href={product.link} target="_blank" rel="noopener noreferrer">View Product</a>}
                            </li>
                        ))}
                    </ul>
                </section>
            )}

            {data.media && data.media.length > 0 && <MediaGallery media={data.media} />}

            <footer>
                <p className="copy">Built with ❤️ by <a href="https://github.com/madhuryadutta" target="_blank" rel="noopener noreferrer">Madhurya Dutta</a></p>
            </footer>
        </div>
    );
};

export default Portfolio;

