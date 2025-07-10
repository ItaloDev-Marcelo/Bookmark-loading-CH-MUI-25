//packages de terceiros
import ButtonCamp from "../comum-components/button"
import Img from "../comum-components/ImageCamp"
import { ImagensBank } from "../../data/ImagensBank"


const PriceCardComponent = ({icon,title,subtitle,btnTitle}) => {
    const {Dots} = ImagensBank;

    return (
        <article className=" card flex flex-col justify-center items-center
         bg-white h-[380px] lg:h-[355px] rounded-[7px] w-[300px]
         lg:w-[290px] my-5 lg:my-0 lg:mx-5">
            <div className="flex flex-col justify-center items-center my-2">
               <Img imageUrl={icon} /> 
               <h4 className="font-bold text-Blue-950 my-5">{title}</h4>
               <p className="text-gray-400 font-medium mb-[2em]">{subtitle}</p>
            </div> 
              <Img imageUrl={Dots} />
            <div>
                <ButtonCamp title={btnTitle} btnStyle='bg-Blue-600 mt-8 lg:mt-5 w-[250px]
                 h-[50px] text-white hover:bg-blue-400 rounded-[7px] cursor-pointer font-semibold' />
            </div>
        </article>
    )
}

export default PriceCardComponent 