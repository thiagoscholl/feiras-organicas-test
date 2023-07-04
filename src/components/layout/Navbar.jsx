import { Link } from "react-router-dom";

import logo from "../../assets/logoG.png";

function Navbar() {
  function toggleNavbar(e) {
    document.querySelector(".navbar-menu").classList.toggle("hidden");
    document.querySelector(".navbar-menu").classList.toggle("flex");
  }

  return (
    <div>
      <nav className='navbar shadow-lg bg-default text-white'>
        <div className='container max-w-full'>
          <div className='flex-none px-2 mx-2'>
            <Link to='/' className='text-lg align-middle'>
              <img
                className='lg:w-48 ml-2 md:w-32 sm:w-28 w-28'
                src={logo}
                alt='Logo'
              />
            </Link>
          </div>
          <div className='flex-1 px-2 mx-2'>
            <div className='flex justify-end hidden space-x-8 lg:flex'>
              <Link to='/' className='btn btn-ghost btn-sm rounden-btn'>
                Mapa
              </Link>
              <Link to='/' className='btn btn-ghost btn-sm rounden-btn'>
                Sobre Nós
              </Link>
              <Link to='/' className='btn btn-ghost btn-sm rounden-btn'>
                Notícias
              </Link>
              <Link to='/' className='btn btn-ghost btn-sm rounden-btn'>
                Cadastrar Local
              </Link>
              <Link to='/' className='btn btn-ghost btn-sm rounden-btn'>
                Login
              </Link>
            </div>
          </div>
        </div>
        <div className='flex lg:hidden'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='w-6 h-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            onClick={toggleNavbar}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </div>
      </nav>
      <div className='navbar-menu relative z-50 lg:hidden '>
        <div className='navbar-backdrop fixed inset-0 bg-gray-800 opacity-25'></div>
        <nav className='fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-default text-white overflow-y-auto border-0'>
          <div className='flex items-center mb-8 justify-between'>
            <Link to='/' className='text-lg align-middle'>
              <img className='max-w-[75%]' src={logo} alt='Logo' />
            </Link>
            <button className='navbar-close' onClick={toggleNavbar}>
              <svg
                className='h-6 w-6 text-white-400 cursor-pointer hover:text-white-500'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M6 18L18 6M6 6l12 12'
                ></path>
              </svg>
            </button>
          </div>
          <div>
            <ul>
              <li className='mb-1'>
                <Link to='/' className='btn btn-ghost btn-sm rounden-btn'>
                  Mapa
                </Link>
              </li>
              <li className='mb-1'>
                <Link to='/' className='btn btn-ghost btn-sm rounden-btn'>
                  Sobre Nós
                </Link>
              </li>
              <li className='mb-1'>
                <Link to='/' className='btn btn-ghost btn-sm rounden-btn'>
                  Notícias
                </Link>
              </li>
              <li className='mb-1'>
                <Link to='/' className='btn btn-ghost btn-sm rounden-btn'>
                  Cadastrar Local
                </Link>
              </li>
              <li className='mb-1'>
                <Link to='/' className='btn btn-ghost btn-sm rounden-btn'>
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;

