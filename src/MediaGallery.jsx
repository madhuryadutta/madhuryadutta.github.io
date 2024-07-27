import React from 'react';

const MediaGallery = ({ media }) => {
    const getYouTubeEmbedUrl = (url) => {
        const videoId = new URL(url).searchParams.get('v');
        return `https://www.youtube.com/embed/${videoId}`;
    };

    return (
        <section>
            <h2 className="text-danger">Media Gallery</h2>
            <div className="media-gallery">
                {media.map((item, index) => (
                    <div key={index} className="media-item">
                        {item.type === 'image' && <img src={item.url} alt={`Media ${index}`} className="img-fluid" />}
                        {item.type === 'video' && item.url.includes('youtube') && (
                            <iframe
                                src={getYouTubeEmbedUrl(item.url)}
                                title={`Video ${index}`}
                                frameBorder="0"
                                allowFullScreen
                                className="video-iframe"
                            ></iframe>
                        )}
                        {item.type === 'link' && (
                            <a href={item.url} target="_blank" rel="noopener noreferrer">View Resource</a>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default MediaGallery;
