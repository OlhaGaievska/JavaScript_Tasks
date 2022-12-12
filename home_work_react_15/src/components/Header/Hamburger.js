import './HeaderMedia.css';

function Hamburger({isOpen}){
    return(
    <div className="hamburger">
        <div className="burger hamburger1"></div>
        <div className="burger hamburger2"></div>
        <div className="burger hamburger3"></div>

        <style jsx>{`
            .hamburger1{
                transform:${isOpen ? 'rotate(45deg)':'rotate(0)'};
            }
            .hamburger2{
                transform:${isOpen ? 'translateX(100%)':'translateX(0)'};
                opacity:${isOpen ? 0 : 1};
            }
            .hamburger3{
                transform:${isOpen ? 'rotate(-45deg)':'rotate(0)'};
                
            }
        `}
        </style>
    </div>
    )
}

export default Hamburger