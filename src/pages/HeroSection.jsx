//packages de terceiros
import { Box } from "@mui/material";
//
import NavBar from "../nav/mob";
import DeskBar from "../nav/dek";
import Paragraph from '../comum-components/paragraph/index';
import ButtonCamp from '../comum-components/button/index' ;
import {ImagensBank} from '../data/ImagensBank';
import Img from  "../comum-components/ImageCamp/index";
import Section from "../comum-components/section/Section";

export default function Hero() {
    const {Hero} = ImagensBank;

    return (
        <Section id='home' modole=''>
              <Box sx={{display: {xs: 'block', lg: 'none'}}}>
                <NavBar/>
             </Box>

              <Box sx={{display: {xs: 'none', lg: 'block'}}}>
                <DeskBar/>
             </Box>

             <div className="flex flex-col justify-center items-center  lg:flex-row-reverse 
             lg:justify-between lg:px-4 px-large my-5 top-space">
       
               <figure className="md:p-4">
                  <Img imageUrl={Hero} imageAlt="hero banner" />
               </figure>

                <div className="flx flex-col px-4 py-2 lg:py-1 items-center text-center 
                lg:text-left md:items-center md:w-[75%]  lg:w-[50%] my-2">
                <h1 className="text-[1.7em] md:text-[2em] lg:text-[3em] font-semibold my-2 lg:my-1 text-Blue-950" >A Simple Bookmark Manager</h1>
                <Paragraph Text=' A clean and simple interface to organize your favourite websites. Open a new 
  browser tab and see your sites load instantly. Try it for free.' 
  textStyle='text-normal-1 my-5 md:text-[1.5em] text-gray-400' />

                <div className="mt-5">
                    <ButtonCamp title="Get it on Chrome" btnStyle='mr-2 lg:mr-4 bg-blue-300 capitalize text-white h-[45px] p-2 lg:w-[155px] 
                     cursor-pointer rounded-[5px]' />
                    <ButtonCamp title="Get it on Firefox" btnStyle=' lg:w-[155px] capitalize bg-gray-200 h-[45px] p-2 cursor-pointer rounded-[5px] '  />
                </div>
                </div>
             </div>
        </Section>
    )
}