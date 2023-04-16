import './nav-style.scss'
import logo from '../../img/ImageLogo.png'
function Nav() {
    const changeToSection=function(){
        document.querySelector('.nav').classList.add('hidden');
        document.querySelector('.section').classList.remove('hidden')
    }
    return (
        <nav className="nav">
            <img className='nav__img' src={logo} alt='Logo'/>
            <button className="nav__button" onClick={changeToSection}>Play with Friend</button>
        </nav>
    )
}
export default Nav