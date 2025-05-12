import { useState } from 'react'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import Tabs from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import SimpleBook from './simpleBook';
import SpeedSearching from './speedySearching';
import EasyShering from './easyShering';

export default function Main() {
    const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ maxWidth: '100%', typography: 'body1' }}>
      <TabContext value={value} >
        <Box id='list'  sx={{ borderBottom: 1, borderColor: 'divider'}}>
          <Tabs sx={{display: 'flex', flexDirection: {xs: 'column', lg: 'row'}, justifyContent: 'center'}}  onChange={handleChange} aria-label="lab API tabs example">
            <Tab className='list-1'   label="Item One" value="1" />
            <Tab  className='list-2'  label="Item Two" value="2" />
            <Tab  className='list-3'  label="Item Three" value="3" />
          </Tabs>
        </Box>
        <TabPanel value="1"><SimpleBook /></TabPanel>
        <TabPanel value="2"><SpeedSearching /></TabPanel>
        <TabPanel value="3"><EasyShering /></TabPanel>
      </TabContext>
    </Box>
  );
}