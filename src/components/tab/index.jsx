// packages de terceiros 
import { useState } from "react"
//
import {slideText0, slideText1, slideText2} from '../../data/slideitems'
import {ImagensBank} from '../../data/ImagensBank';
import {tabTitle} from '../../data/tabTitleList';
import TabNav from "../tab/tab-nav/tabNav";
import SlideComponent from '../tab/tab-sections/slideComponent'

export default function tabSlider() {
    const [tabValue, setTabValue] = useState(0);
    const {Tab1,Tab2,Tab3} = ImagensBank;
    const selectedLink = (tabItem) => {
        setTabValue(tabItem);
    };

    return (
        <div>
          <TabNav selectedLink={selectedLink} tabValue={tabValue} />  
          {
           tabValue === 0 ? 
           <SlideComponent image={Tab1} title={tabTitle[0]} text={slideText0} btnTitle='More Info'/> :
            tabValue === 1 ?
           <SlideComponent image={Tab2} title={tabTitle[1]} text={slideText1} btnTitle='More Info'/> :
           <SlideComponent image={Tab3} title={tabTitle[2]} text={slideText2} btnTitle='More Info'/>
          }
        </div>
    )
}