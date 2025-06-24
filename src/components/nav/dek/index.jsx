
import Img from '../../comum-components/ImageCamp'
import {navList, bankOfImagens} from '../../data/index'

export default function DeskBar() {

    const {Logo} = bankOfImagens
    return (
         <header className='flex flex-row justify-between items-center px-[2em] py-[2.5em] px-large-nav'>
              <a href='#index.html'>
                <Img imageUrl={Logo} />
              </a>
              <nav >
                 <ul className='flex flex-row navDesk'>
                    {
                     navList.map((navItem,index) => <li key={index} className='uppercase 
                      xt-[1.3em] mx-10 mt-1 tracking-[1px] text-Blue-950 cursor-pointer'>{navItem}</li>  )
                    }
                 </ul>
              </nav>
         </header>
    )
}