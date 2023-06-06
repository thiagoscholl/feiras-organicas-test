import { Link } from 'react-router-dom';

import logo from '../../assets/logoG.png';

function Navbar() {
    return (
        <nav className='navbar mb-12 shadow-lg bg-default text-white'>
            <div className="container max-auto">
                <div className="flex-none px-2 mx-2">
                    <Link to='/' className='text-lg align-middle font-bold' >
                        <img
                                className="w-48 ml-2"
                                src={logo}
                                alt="Logo"
                            />
                    </Link>
                </div>

                <div className="flex-1 px-2 mx-2">
                    <div className="flex justify-end">
                        <Link to='/' className="btn btn-ghost btn-sm rounden-btn">
                            Mapa
                        </Link>
                        <Link to='/' className="btn btn-ghost btn-sm rounden-btn">
                            Sobre Nós
                        </Link>
                        <Link to='/' className="btn btn-ghost btn-sm rounden-btn">
                            Notícias
                        </Link>
                        <Link to='/' className="btn btn-ghost btn-sm rounden-btn">
                            Cadastrar Local
                        </Link>
                        <Link to='/' className="btn btn-ghost btn-sm rounden-btn">
                            Login
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;