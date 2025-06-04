import {Stack, Button} from '@mui/material';
import {useState} from 'react';
import SimpleBook from './Home/simpleBook' ;
import EasyShering  from './Home/easyShering';
import SpeedySearching  from './Home/speedySearching';
export default function HomeArea() {

  const [tab, setTab] = useState('1');
    
   const NavTab = (value) => {
     setTab(value)
   }

    return (
        <Stack id='tab-container' sx={{padding: {xs: '1em' ,lg: '2em 3em'}, 
        display: 'flex', flexDirection: 'column', 
        justifyContent: 'center', alignContent: 'center'}}>
             <Stack className='navegation-tab' sx={{margin: {xs: '1em 0', lg: '1.2em auto'}, display: 'flex',
               flexDirection: {xs: 'column', lg: 'row'}, 
               justifyContent: {lg: 'space-between'}, padding: '1em 0'}}>
                 <hr/>
                 <Button onClick={() => NavTab('1')}>Simple Bookmarking</Button>
                 <hr/>
                 <Button onClick={() => NavTab('2')}>Speedy Searching</Button>
                 <hr/>
                 <Button onClick={() => NavTab('3')}>Easy Sharing</Button>
                 <hr/>
             </Stack>
             <Stack className='tab-slider'>
               {tab == '1' ? <SimpleBook /> : tab == '2' ? <EasyShering/> : <SpeedySearching/>}
             </Stack>
        </Stack>
    )
}