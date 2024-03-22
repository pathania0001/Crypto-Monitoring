import  {useContext} from 'react';
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { ThemeProvider, createTheme } from '@mui/material';
import { CurrencyContext } from '../../CurrencyApi';

export default function DropdownMenu() {
  
const setCurrency  = useContext(CurrencyContext);
  const theme =createTheme({
    palette:{
      primary:{
        main: "#3a80e9",
      }
    }
  });
 
  

  return (

  <div >  
         
            <ThemeProvider theme={theme}>
            <Box sx={{ minWidth: 90,maxeight:50 ,color:"var(--blue)",maxHeight:50}}>
               
                <FormControl  fullWidth> 
                <InputLabel sx={{color:"var(--blue)"}}  id="Menulabel" >Currency</InputLabel>
                
                <Select 
                   sx={{color:"var(--blue)",fontSize:"15px"}}
                  labelId="demo-simple-select-label"
                  id="menu"
                  value={setCurrency.currency}
                  label="Currency"
                  onChange={(event)=>setCurrency.settingCurrency(event.target.value)}
                  
                >
                  <MenuItem  value={"USD"}  >USD</MenuItem>
                  <MenuItem value={"INR"}>INR</MenuItem>
               
                </Select>
                
              </FormControl>
            </Box>
            </ThemeProvider>
       
    </div>
  );
}