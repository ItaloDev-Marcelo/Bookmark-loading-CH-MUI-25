//
import {navList} from '../../../data/navList';
import {ImagensBank} from '../../../data/ImagensBank';
import Img from '../../comum-components/ImageCamp/index';
import UseToggleBar from './hook/UseToggleBar';
export default function NavBar() {
    const {Logo, LogoWhite, Hamburger, Close, Facebook, Twitter} = ImagensBank;
    const {menu,handleOpen,handleClose} = UseToggleBar();

    return (
        <header className='flex flex-row justify-between items-center h-[120px] px-7 md:px-10  '>
             <a href='#' style={{display: !menu ? 'flex' : 'none'}} >
                <Img imageUrl={Logo} />
             </a>

             <button style={{display: !menu ? 'flex' : 'none'}}  className='cursor-pointer' onClick={handleOpen}>
                 <Img imageUrl={Hamburger } />
             </button>

             <nav  style={{display: menu ? 'flex' : 'none'}} className='flex flex-col px-7 
              fixed  top-0 left-0 h-[100%] w-[100%] bg-blue-t-950'>
                <div className='flex flex-row justify-between my-[3.2em] z-50'>
                    <a href='#'>
                <Img imageUrl={LogoWhite} />
             </a>

             <button className='cursor-pointer' onClick={handleClose}>
                 <Img imageUrl={Close} />
             </button>
                </div>
                  <hr className='text-Grey-50 mt-4 opacity-50
                  '/>
                <ul className='text-center navbar'>
                    {
                        navList.map((navItem, index) => {
                           
                            return (
                                <>
                                  <li key={index} className='uppteercase xt-[1.3em] my-5
                             tracking-[1px] text-white cursor-pointer'>{navItem}</li>
                             <hr className='line text-Grey-50 opacity-50'/>
                                </>
                            )
                        } )
                    }
                </ul>
                 <div className='relative flex flex-row justify-center mt-[10em]'>
                    <button className='mr-5'>
                        <Img imageUrl={Facebook} />
                    </button>

                    <button>
                        <Img imageUrl={Twitter}/>
                    </button>
                 </div>
             </nav>
        </header>
    )
}