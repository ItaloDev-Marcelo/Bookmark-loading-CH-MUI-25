import Img from '../../comum-components/ImageCamp/index'
import Paragraph from '../../comum-components/paragraph/index'
import ButtonCamp from '../../comum-components/button/index'
const SlideComponent = ({image, text, textSt, title, btnTitle,btnStyle }) => {

     return (
        <section>
            <figure>
                <Img imageUrl={image} />
            </figure>
            <div>
                <h3>{title}</h3>
                <Paragraph Text={text} textStyle={textSt} />
                <ButtonCamp title={btnTitle} btnStyle={btnStyle} />
            </div>
        </section>
     )
}

export default SlideComponent