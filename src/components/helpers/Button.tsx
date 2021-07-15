import React, { MouseEventHandler } from 'react';
import './Button.scss';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium', 'btn--large'];

interface CustomButton {
    children: React.ReactNode,
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: MouseEventHandler<HTMLButtonElement>,
    buttonStyle: string,
    buttonSize: string
}

export const Button = ({ children, type, onClick, buttonStyle, buttonSize }: CustomButton) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        <Link to='/sign-up' className='btn-mobile'>
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
                {children}
            </button>
        </Link>
    )
}