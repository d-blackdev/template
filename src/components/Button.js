import React from 'react'
import '../css/button.css'


const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--meduim', 'btn--large', 'btn--mobile',"btn--wide"]
const COLOR = ['primary','blue','red','green']

export const Button = ({
    children,type, onClick, buttonStyle,buttonSize,buttonColor,disabled
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
    const checkButtonColor = COLOR.includes(buttonColor) ? buttonColor : null;


    return (
        <button className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`} disabled={disabled} onClick={onClick} type={type}>{children}</button>
    )
}
