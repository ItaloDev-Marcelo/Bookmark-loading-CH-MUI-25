import ButtonCamp from "../comum-components/button"
import Img from "../comum-components/ImageCamp"
import { bankOfImagens } from "../data"


const PriceCardComponent = ({icon,title,subtitle,btnTitle}) => {

    const {Dots} = bankOfImagens
    return (
        <article className=" card flex flex-col justify-center items-center bg-amber-400 h-[350px] lg:h-[355px] rounded-[7px] w-[300px]
         lg:w-[290px] my-2 lg:my-0 lg:mx-5">
            <div className="flex flex-col justify-center items-center">
               <Img imageUrl={icon} /> 
               <h4 className="font-semibold text-Blue-950 my-2">{title}</h4>
               <p className="text-grey-400 mb-[2em]">{subtitle}</p>
            </div> 
              <Img imageUrl={Dots} />
            <div>
                <ButtonCamp btnTitle={btnTitle} btnStyle='bg-Blue-600 mt-5 lg:mt-10 w-[250px]
                 h-[50px] text-white hover:bg-blue-400 rounded-[7px] cursor-pointer' />
            </div>
        </article>
    )
}

export default PriceCardComponent 