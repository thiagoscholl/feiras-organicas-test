import { Link } from "react-router-dom";

import logo from "../../assets/logoP.png";

function Footer() {
  return (
    <footer className='footer p-3 bg-default text-white justify-center'>
      <div className='container mt-2 '>
        <div className='flex footer-center sm:space-x-20 space-x-2 sm:pr-16 pr-28'>
          <Link
            to='/'
            className='btn btn-ghost btn-sm text-[10px] sm:text-sm rounden-btn'
          >
            Faça uma Doação
          </Link>
          <div className='container max-auto'>
            <img className='md:w-14 w-10' src={logo} alt='Logo' />
          </div>
          <Link
            to='/'
            className='btn btn-ghost btn-sm text-[10px] sm:text-sm rounden-btn'
          >
            Contato
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

