import React from 'react';
import './Button.scss';

const Button = ({ text, iconSrc = '', isWhite = false }) => {
    return (
        <>
            <button className={isWhite ? 'btn --white-text' : 'btn'}>
                <img height={32} width={32} src={iconSrc} alt='Плюс' />
                <span>{text}</span>
            </button>
        </>
    );
};

export default Button;
