import Paragraph from '../comum-components/paragraph/index'
import TabSlider from '../tab/index'
import { pText } from '../data/index'
export default function FeaturesSection() {

    return (
      <section className='py-[4em] flex flex-col justify-center items-center text-center'>
          <div>
              <h2>Features</h2>
              <Paragraph Text={pText} textStyle='' />
          </div>
          <TabSlider/>
      </section>
    )
}