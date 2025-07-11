//
import {tabList} from '../../../data/tabTitleList';

export default function TabNav({selectedLink, tabValue}) {
    return (
        <nav className="tab-bar lg:flex  lg:flex-col lg:items-center px-6 ">
          <hr className='lg:hidden' />
          <ul className="lg:flex lg:flex-row lg:justify-center">
             {
            tabList.map((item, index) => (
               <>
               <li key={index}   
                className={tabValue === index ? 
               'tab active my-2  lg:my-0 lg:mx-4 cursor-pointer' : 
               'tab my-2 cursor-pointer  lg:my-0 lg:mx-4 ' } 
                onClick={() => selectedLink(index)} >{item}</li>
            <hr className='lg:hidden'/>
               </>
            ))
           }
          </ul>
          <hr className='hidden mt-1 lg:block w-[500px] px-[5em] '/>
        </nav>
    )
}