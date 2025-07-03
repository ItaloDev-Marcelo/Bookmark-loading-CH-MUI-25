//
import Img from "../components/comum-components/ImageCamp";
import { footerList } from "../data/footerList";
import { ImagensBank} from "../data/ImagensBank";

export default function Footer() {

    const {Facebook, Twitter, LogoFotter} = ImagensBank;

    return (
        <footer className='bg-Blue-950
         text-white px-5 py-12 lg:px-14 lg:py-13  flex flex-col justify-center items-center lg:flex-row lg:justify-between'>
             <div className='flex flex-col lg:flex-row lg:ml-5'>
                <a href="#">
                <Img imageUrl={LogoFotter}  />
             </a>
             <ul className="flex flex-col justify-center items-center lg:flex-row my-5 lg:my-0 ml-7">
                {
                  footerList.map((item) => (<li key={Math.random()} className="cursor-pointer my-2 lg:mt-0 lg:mx-4">{item}</li>))
                }
             </ul>
             </div>
             <div className="flex ml-7items-center flex-row px-2">
               <div className='ml-4'> <Img imageUrl={Facebook} /></div>
               <div className="mx-4"><Img imageUrl={Twitter} /></div>
             </div>
        </footer>
    )
}