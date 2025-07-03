import Img from '../../comum-components/ImageCamp/index'
import Paragraph from '../../comum-components/paragraph/index'
import ButtonCamp from '../../comum-components/button/index'
const SlideComponent = ({image, text, title, btnTitle }) => {

     return (
        <section className='flex flex-col lg:flex-row mt-10 p-5 lg:justify-between '>
            <figure className='lg:w-[50%] lg:mr-7'>
                <Img imageUrl={image} />
            </figure>
            <div className='lg:w-[400px] flex flex-col text-center lg:items-start lg:text-left'>
                <h3 className='mt-4 text-[1.5em] lg:text-[2.5em]'>{title}</h3>
                <Paragraph Text={text} textStyle='my-4 text-gray-400' />
                <ButtonCamp title={btnTitle} btnStyle='bg-Blue-600 rounded-[7px] font-semibold h-[45px] cursor-pointer hover:bg-blue-300 p-2 text-white' />
            </div>
        </section>
     )
}

export default SlideComponent