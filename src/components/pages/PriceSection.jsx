import Paragraph from '../comum-components/paragraph/index'
import Section from '../comum-components/section/Section'
import {PriceSectionP, CardData} from '../data/index'
import PriceCardComponent from '../price-cards'
export default function PriceSection() {
    return (
        <Section modole='py-[4em]  flex flex-col justify-center items-center text-center'>
            <div className='lg:px-[24em]'>
                <h2 className='py-7 text-[1.7em] lg:text-[2.2em] font-semibold text-Blue-950'> Download the extension</h2>
              <Paragraph Text={PriceSectionP} textStyle='mb-2 text-gray-400' />   

            </div>
          
              <div className='flex my-10 lg:my-15 flex-col lg:flex-row '>
                 {
                  CardData.map(({icon, title, subtitle, buttonText},index) =>  (
                    <PriceCardComponent key={index}
                     icon={icon} 
                     title={title}
                      subtitle={subtitle}
                       btnTitle={buttonText} />
                  ))
                 }
              </div>
        </Section>
    )
}