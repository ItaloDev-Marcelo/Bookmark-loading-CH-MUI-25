import { List, ListItem, ListItemButton } from "@mui/material";

const ListCamp = () => {
  return (
    <List sx={{display: 'flex', flexDirection: {xs: 'column', lg: 'row'},
     justifyContent:{xs: 'center', lg: 'space-between'}, alignItems: 'center'}}>
      <ListItem> Features </ListItem>
      <ListItem> Pricing </ListItem>
      <ListItem> Contact </ListItem>
      <ListItemButton sx={{backgroundColor: 'red', color: 'white', borderRadius: '7px'}}> Login </ListItemButton>
    </List>
  );
};

export default ListCamp;


 