import { Link } from 'react-router-dom';

import logo from '../../assets/logoP.png';

function Footer() {
    return (
        <footer className="footer p-4 bg-default text-white">
            <div className="container max-auto">
                <img className="w-14 ml-2" src={logo} alt="Logo" />
            </div>
            <div className="container mt-2 -ml-36">
                    <div className="flex footer-center space-x-10">
                        <Link to='/' className="btn btn-ghost btn-sm rounden-btn">
                            Faça uma Doação
                        </Link>
                        <Link to='/' className="btn btn-ghost btn-sm rounden-btn">
                            Sobre Nós
                        </Link>
                        <Link to='/' className="btn btn-ghost btn-sm rounden-btn">
                            Contato
                        </Link>
                        
                    </div>
                </div>
        </footer>
    )
}

export default Footer;