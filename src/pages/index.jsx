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
        <Stack>
             <Stack>
                 <Button onClick={() => NavTab('1')}>Item 1</Button>
                 <Button onClick={() => NavTab('2')}>Item 2</Button>
                 <Button onClick={() => NavTab('3')}>Item 3</Button>
             </Stack>
             <Stack className='tab-slider'>
               {tab == '1' ? <SimpleBook /> : tab == '2' ? <EasyShering/> : <SpeedySearching/>}
             </Stack>
        </Stack>
    )
}