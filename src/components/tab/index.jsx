import { useState } from "react"
import TabNav from "../tab/tab-nav/tabNav";
import SlideComponent from '../tab/tab-sections/slideComponent'
import {bankOfImagens, slideText0, slideText1, slideText2, tabList} from '../data/index'

export default function tabSlider() {

    const [tabValue, setTabValue] = useState(0)
    const {Tab1,Tab2,Tab3} = bankOfImagens

    const selectedLink = (tabItem) => {
        setTabValue(tabItem);
    }

    return (
        <div>
          <TabNav selectedLink={selectedLink} tabValue={tabValue} />  
          {
   tabValue === 0 ? 
           <SlideComponent image={Tab1} title={tabList[0]} text={slideText0}   btnTitle='More Info'    /> : tabValue === 1 ?
           <SlideComponent image={Tab2} title={tabList[1]} text={slideText1}   btnTitle='More Info'    /> :
           <SlideComponent image={Tab3} title={tabList[2]} text={slideText2}   btnTitle='More Info'    />
          }
        </div>
    )
}