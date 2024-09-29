import React from 'react';
import './Arts.css';
import BackgroundSection from '../components/BackgroundSection'; // Ensure the path is correct

const Arts = () => {
/*    const artworks = [
        {
            id: 1,
            title: "Sunset Over the Mountains",
            description: "A vibrant depiction of a sunset casting a golden hue over mountain peaks.",
            imageUrl: "sunset.jpg", // Ensure the path to the image is correct
        },
        {
            id: 2,
            title: "Abstract Geometries",
            description: "An exploration of geometric shapes and their interplay with colors and shadows.",
            imageUrl: "abstract.jpg", // Ensure the path to the image is correct
        },
        {
            id: 3,
            title: "The Calm Before the Storm",
            description: "A dramatic painting capturing the tension and beauty of an approaching storm.",
            imageUrl: "storm.jpg", // Ensure the path to the image is correct
        }
    ];*/

    return (
        <BackgroundSection backgroundImage="arts.jpg" overlay={true} scrollable={false}>
            <div className="arts-content">
                <h1 className="arts-title">My Artworks</h1>
                <p className="arts-description">
                    Welcome to an empty page which may or may not get updated sometime after I graduate.
                </p>
            </div>
            </BackgroundSection>
    );
};

export default Arts;