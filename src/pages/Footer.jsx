//
import Img from "../components/comum-components/ImageCamp";
import { footerList } from "../data/footerList";
import { ImagensBank} from "../data/ImagensBank";

export default function Footer() {

    const {Facebook, Twitter, LogoFotter} = ImagensBank;

    return (
        <footer className='bg-Blue-950
         text-white px-5 py-12 lg:px-14 lg:py-7
          flex flex-col justify-center items-center lg:flex-row lg:justify-between'>
             <div className='flex flex-col lg:flex-row lg:ml-5lg:mt-7'>
                <a href="#">
                <Img imageUrl={LogoFotter}  />
             </a>
             <ul className="flex flex-col justify-center items-center lg:flex-row my-5 lg:my-0 lg:ml-35">
                {
                  footerList.map((item) => (<li key={Math.random()} className="cursor-pointer my-2 lg:my-0 lg:mx-4">{item}</li>))
                }
             </ul>
             </div>
             <div className="flex ml-7items-center flex-row px-2 row-icons">
               <div className='ml-4 lg:ml-7 cursor-pointer'> <Img imageUrl={Facebook} /></div>
               <div className="mx-4 cursor-pointer"><Img imageUrl={Twitter} /></div>
             </div>
        </footer>
    )
}