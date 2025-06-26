import ButtonCamp from "../comum-components/button"
import Img from "../comum-components/ImageCamp"
import { bankOfImagens } from "../data"


const PriceCardComponent = ({icon,title,subtitle,btnTitle}) => {

    const {Dots} = bankOfImagens
    return (
        <article>
            <div>
               <Img imageUrl={icon} /> 
               <h4 className="font-semibold text-Blue-950">{title}</h4>
               <p className="text-grey-400">{subtitle}</p>
            </div> 
              <Img imageUrl={Dots} />
            <div>
                <ButtonCamp btnTitle={btnTitle} btnStyle='bg-Blue-600 w-[250px] h-[30px] text-white hover:bg-blue-400 rounded-[7px]' />
            </div>
        </article>
    )
}

export default PriceCardComponent 