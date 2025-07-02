import Paragraph from '../comum-components/paragraph/index'
import TabSlider from '../tab/index'
import { pText } from '../data/index'
import Section from '../comum-components/section/Section'
export default function FeaturesSection() {

    return (
    <Section modole='py-[4em] my-4 lg:my-15 flex flex-col justify-center items-center text-center ' id='feature'>
         <div className='pb-5 lg:pb-10 lg:px-[22em]'>
              <h2 className='text-[1.7em] lg:text-[2.5em] my-4 font-semibold text-Blue-950'>Features</h2>
              <Paragraph Text={pText} textStyle='my-3 text-gray-400' />
          </div>
          <TabSlider/>
    </Section>
    )
}