
import {navList, bankOfImagens} from '../../data/index'
import Img from '../../comum-components/ImageCamp/index'

export default function NavBar() {

    const {Logo, LogoWhite, Hamburger, Close} = bankOfImagens;

    return (
        <header className='flex flex-row justify-between items-center h-[55px] px-7  bg-Blue-600'>
             
             <a href='#'>
                <Img imageUrl={Logo} />
             </a>

             <button>
                 <Img imageUrl={Hamburger } />
             </button>

             <nav className='flex flex-col justify-center
              absolute top-0 left-0 h-[100%] w-[100%] bg-red-300'>
                <div className='flex flex-row justify-between'>
                    <a href='#'>
                <Img imageUrl={LogoWhite} />
             </a>

             <button>
                 <Img imageUrl={Close} />
             </button>
                </div>
                <ul className='text-center '>
                    {
                        navList.map((navItem, index) =>  <li key={index}>{navItem}</li> )
                    }
                </ul>

             </nav>
        </header>
    )
}