import { Link } from 'react-router-dom';

import logo from '../../assets/logoP.png';

function Footer() {
    return (
        <footer className="footer p-3 bg-default text-white justify-center">
            <div className="container mt-2">
                <div className="flex footer-center space-x-20">
                    <Link to='/' className="btn btn-ghost btn-sm rounden-btn">
                        Faça uma Doação
                    </Link>
                    <div className="container max-auto">
                        <img className="w-14" src={logo} alt="Logo" />
                    </div>
                    <Link to='/' className="btn btn-ghost btn-sm rounden-btn">
                        Contato
                    </Link>
                        
                </div>
            </div>


        </footer>
    )
}

export default Footer;