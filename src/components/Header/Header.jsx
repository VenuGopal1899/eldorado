import EldoradoLogo from '../../images/EldoradoLogo.png';

const Header = () => {
    return(
        <div className="header container-fluid bg-light text-center">
            <span><img src={EldoradoLogo}/></span>
        </div>
    )
}

export default Header;