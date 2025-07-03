//
import AccordionComponent from "../components/accordion/accordion";
import ButtonCamp from "../components/comum-components/button";
import Paragraph from "../components/comum-components/paragraph";
import Section from "../components/comum-components/section/Section";

export default function AskedSection(){
    return (
        <Section modole='flex flex-col justify-center items-center my-7 lg:my-10 ' id='asked'>
            <div className='mb-10 text-center '>
            <h3 className="font-semibold text-[1.7em] lg:text-[2em]">Frequently Asked Questions</h3>
            <Paragraph Text=' Here are some of our FAQs. If you have any other questions you’d like 
  answered please feel free to email us.' textStyle=' py-3 lg:w-[400px] text-gray-400 ' />
            </div>
             <AccordionComponent/>
            <div className=' mt-2 lg:mt-10' >
            <ButtonCamp btnStyle='bg-Blue-600 rounded-[7px] 
            font-semibold h-[45px] cursor-pointer hover:bg-blue-300 p-2 text-white'  />  
            </div>    
           </Section>
    )
}