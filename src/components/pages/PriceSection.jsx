import Paragraph from '../comum-components/paragraph/index'
import {PriceSectionP, CardData} from '../data/index'
import PriceCardComponent from '../price-cards'
export default function PriceSection() {
    return (
        <section>
              <h2> Download the extension</h2>
              <Paragraph Text={PriceSectionP} textStyle='' />   

              <div>
                 {
                  CardData.map(({icon, title, subtitle, buttonText},index) =>  (
                    <PriceCardComponent key={index} icon={icon} title={title} subtitle={subtitle}_ btnTitle={buttonText} />
                  ))
                 }
              </div>

        </section>
    )
}