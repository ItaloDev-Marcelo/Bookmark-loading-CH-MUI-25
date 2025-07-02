import AccordionComponent from "../accordion/accordion";
import ButtonCamp from "../comum-components/button";
import Paragraph from "../comum-components/paragraph";
import Section from "../comum-components/section/Section";


export default function AskedSection(){
    return (
        <Section modole='flex flex-col justify-center items-center my-7 lg:my-10 text-center' id='asked'>
            <div className='mb-10 '>
            <h3 className="font-semibold text-[1.7em] lg:text-[2em]">Frequently Asked Questions</h3>
            <Paragraph Text=' Here are some of our FAQs. If you have any other questions you’d like 
  answered please feel free to email us.' textStyle=' py-3 lg:w-[400px] ' />
            </div>
             <AccordionComponent/>
            <div className=' mt-2 lg:mt-10' >
            <ButtonCamp btnStyle='bg-blue-400 rounded-[7px] 
            font-semibold h-[45px] cursor-pointer hover:bg-blue-300 p-2 text-white'  />  
            </div>    
           </Section>
    )
}