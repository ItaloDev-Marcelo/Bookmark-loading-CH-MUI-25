//
import Section from '../components/comum-components/section/Section'
import Form from '../components/form/index'

export default  function NewsSection() {
  return (
    <Section modole='flex flex-col justify-center lg:items-center bg-Blue-600
     px-4 mt-[2.7em] py-10 lg:p-15 text-center text-white' id=''>
         <div className='mb-10'>
            <h4 className='font-medium text-[1.1em] my-2 lg:text-[1.2em] uppercase tracking-[3px] lg:tracking-[5px]'>35,000+ already joined</h4>
            <h5 className='font-semibold text-[1.5em]  my-2 lg:text-[1.8em]'>Stay up-to-date with what we’re doing</h5>
         </div>
          <Form/>
    </Section>
  )
}

