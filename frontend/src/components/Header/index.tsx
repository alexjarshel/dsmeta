import icon from '../../assets/img/logo.svg'
import './style.css'

function Header() {
    return (
        <>
            <header>
                <div className="dsmeta-logo-container">
                    <img src={icon} alt="DSMeta" />
                    <h1>DSMeta</h1>
                    <p>desenvolvido por<a href="https://www.linkedin.com/in/alex-jarschel-4b16541a2/">@alexJarschel</a></p>
                </div>
            </header>
        </>
    )
}

export default Header