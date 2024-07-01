interface ButtonsInterface {
    icons: any,
    text: string
}

function Buttons({icons, text}: ButtonsInterface) {
    return ( 
        <div className="flex items-center">
        {icons}
        <p>{text}</p>
    </div>
     );
}

export default Buttons;