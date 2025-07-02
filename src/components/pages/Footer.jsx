import Img from "../comum-components/ImageCamp";
import { bankOfImagens, footerList } from "../data";



export default function Footer() {

    const {Facebook, Twitter, LogoFotter}  = bankOfImagens;

    return (
        <footer className='bg-Blue-950
         text-white px-5 py-12 lg:px-14 lg:py-13  flex flex-col items-center lg:flex-row lg:justify-between'>
             <div className='flex flex-col lg:flex-row lg:ml-5'>
                <a href="#">
                <Img imageUrl={LogoFotter}  />
             </a>
             <ul className="flex flex-col lg:flex-row ml-7">
                {
                  footerList.map((item) => (<li key={Math.random()} className="cursor-pointer mt-1 lg:mt-0 lg:mx-4">{item}</li>))
                }
             </ul>
             </div>
             <div className="flex flex-row px-2">
               <div> <Img imageUrl={Facebook} /></div>
               <div className="ml-2"><Img imageUrl={Twitter} /></div>
             </div>
        </footer>
    )
}