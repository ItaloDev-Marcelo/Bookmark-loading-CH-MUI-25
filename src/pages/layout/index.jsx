import {Stack, Button} from '@mui/material';
import {useState} from 'react';
import SimpleBook from '../Home/simpleBook' ;
import EasyShering  from '../Home/easyShering';
import SpeedySearching  from '../Home/speedySearching';
import tabStyle from './tabStyle.module.css';

export default function TabSlider() {

   const [tab, setTab] = useState('tabOne');
    
   const NavTab = (value) => {
     setTab(value)
   }

    return (
        <Stack id='tab-container' sx={{padding: {xs: '1em' ,lg: '2em 3em'}, 
        display: 'flex', flexDirection: 'column', 
        justifyContent: 'center', alignContent: 'center', textAlgn:'center'}}>
             <Stack className='navegation-tab' sx={{margin: {xs: '1em 0', lg: '1.2em auto'}, display: 'flex',
               flexDirection: {xs: 'column', lg: 'row'}, 
               justifyContent: {lg: 'space-between'}, padding: '1em 0'}}>
                 <hr className={tabStyle.hrSpace} />
                 <Button onClick={() => NavTab('tabOne')}>Simple Bookmarking</Button>
                 <hr className={tabStyle.hrSpace}/>
                 <Button onClick={() => NavTab('tabTwo')}>Speedy Searching</Button>
                 <hr className={tabStyle.hrSpace}/>
                 <Button onClick={() => NavTab('tabThree')}>Easy Sharing</Button>
                 <hr className={tabStyle.hrSpace}/>
             </Stack>
             <Stack className='tab-slider'>
               {tab === 'tabOne' ? <SimpleBook /> : tab === 'tabTwo' ? <EasyShering/> : <SpeedySearching/>}
             </Stack>
        </Stack>
    )
}