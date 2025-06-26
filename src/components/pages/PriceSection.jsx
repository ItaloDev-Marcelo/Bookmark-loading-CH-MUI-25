import Paragraph from '../comum-components/paragraph/index'
import {PriceSectionP, CardData} from '../data/index'
import PriceCardComponent from '../price-cards'
export default function PriceSection() {
    return (
        <section className='py-[4em] flex flex-col justify-center items-center text-center'>
              <h2> Download the extension</h2>
              <Paragraph Text={PriceSectionP} textStyle='' />   

              <div className='flex my-10 lg:my-15 flex-col lg:flex-row '>
                 {
                  CardData.map(({icon, title, subtitle, buttonText},index) =>  (
                    <PriceCardComponent key={index} icon={icon} title={title} subtitle={subtitle}_ btnTitle={buttonText} />
                  ))
                 }
              </div>

        </section>
    )
}