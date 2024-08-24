import React, { useState } from 'react';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa'; // Import icons from react-icons
import '../styles/scrollbutton.css'; // Ensure to create this CSS file

const ScrollIcon = () => {
    const [scrollingUp, setScrollingUp] = useState(true);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const scrollToBottom = () => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth',
        });
    };

    const handleClick = () => {
        if (scrollingUp) {
            scrollToBottom();
        } else {
            scrollToTop();
        }
        setScrollingUp(!scrollingUp);
    };

    return (
        <div className="scroll-icon">
            <button onClick={handleClick} className="scroll-btn">
                {scrollingUp ? <FaArrowDown /> : <FaArrowUp />}
            </button>
        </div>
    );
};

export default ScrollIcon;
