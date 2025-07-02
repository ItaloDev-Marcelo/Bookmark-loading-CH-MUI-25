import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import {AccordionData, bankOfImagens} from '../data/index'

export default function AccordionComponent() {


  const {Arrow} = bankOfImagens

    return (
       <div className='px-3 py-2 lg:mx-10 accordion-container'>
          { 
            AccordionData.map((item) => (
                <Accordion disableGutters sx={{margin:0,borderBottom: '1px solid gray', backgroundColor: 'transparent', boxShadow: 'none'}} key={Math.random()}>
                     <AccordionSummary sx={{"&:hover": {color:'red'}}} expandIcon={<img src={Arrow} alt='' />}aria-controls={`painel-${item.id}`} id={`header-${item.id}`}>
                       <Typography component='span'  >
                           <strong>{item.question}</strong>
                       </Typography>
                     </AccordionSummary>
                     <AccordionDetails>
                        <Typography varient='text'>
                           {item.answer}
                        </Typography>
                     </AccordionDetails>
                </Accordion>
            ))
          }
       </div>
    )
}