import { List, ListItem, ListItemButton } from "@mui/material";

const ListCamp = () => {
  return (
    <List sx={{display: 'flex', flexDirection: {xs: 'column', lg: 'row'},
     justifyContent:{xs: 'center', lg: 'space-between'}, alignItems: 'center'}}>
      <ListItem> Features </ListItem>
      <ListItem> Pricing </ListItem>
      <ListItem> Contact </ListItem>
      <ListItemButton sx={{backgroundColor: {xs: 'transparent', lg: 'red'}, color: 'white',
       borderRadius: '7px', 
       border: {xs: '1px solid #fff', lg: 'none'}}}> Login </ListItemButton>
    </List>
  );
};

export default ListCamp;


 