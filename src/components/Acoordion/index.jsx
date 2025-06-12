import {Accordion, AccordionSummary, AccordionDetails, Typography, Box} from '@mui/material'
// import ButtonCamp from '../comum-components/buttonCom'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export default function AccordionComp() {
    return (
       <Box sx={{marginTop: '1em', padding: '1em 0'}}>
          <Accordion  sx={{ boxShadow: 'none', borderBottom: '1px solid gray'  }}>
            <AccordionSummary
            expandIcon={<KeyboardArrowUpIcon/>}
            aria-controls='painel1-content'
            id='painel1-header'
            >
            <Typography component='span'> What is Bookmark?</Typography>   
            </AccordionSummary>
            <AccordionDetails>
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt 
  justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.
            </AccordionDetails>
          </Accordion>
          <Accordion  sx={{ boxShadow: 'none', borderBottom: '1px solid gray'   }}>
            <AccordionSummary
            expandIcon={<KeyboardArrowUpIcon/>}
            aria-controls='painel-content2'
            id='painel-header2'
            >
            <Typography component='span'>How can I request a new browser?</Typography>   
            </AccordionSummary>
            <AccordionDetails>
                    Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. 
  Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, 
  ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. 
  Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.
            </AccordionDetails>
          </Accordion>
          <Accordion  sx={{ boxShadow: 'none', borderBottom: '1px solid gray'   }}>
            <AccordionSummary
            expandIcon={<KeyboardArrowUpIcon/>}
            aria-controls='painel-content3'
            id='painel-header3'
            >
            <Typography component='span'>Is there a mobile app?</Typography>   
            </AccordionSummary>
            <AccordionDetails>
                   Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum 
  urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed 
  sollicitudin ex et ultricies bibendum.
            </AccordionDetails>
          </Accordion>
          <Accordion  sx={{ boxShadow: 'none', borderBottom: '1px solid gray'   }}>
            <AccordionSummary
            expandIcon={<KeyboardArrowUpIcon/>}
            aria-controls='painel-content4'
            id='painel-header4'
            >
            <Typography component='span'>What about other Chromium browsers?</Typography>   
            </AccordionSummary>
            <AccordionDetails>
                   Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam 
  vitae neque eget nisl gravida pellentesque non ut velit.
            </AccordionDetails>
          </Accordion>
       </Box>
    ) 
}

