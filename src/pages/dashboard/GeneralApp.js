import React, { Suspense, lazy } from "react";
import Chats from './Chats'
import { Stack ,Box} from "@mui/material";
import { styled ,useTheme} from '@mui/material/styles'
import Conversation from "../../components/conversation";
import Contact from "../../components/Contact";
import { useSelector } from "react-redux";

const GeneralApp = () => {


  const theme = useTheme();
  const {sidebar} = useSelector((store)=>store.app)
  
  return (
    <>
      <Stack direction="row" sx={{ width:"100%"}}>

        {/*chats */}
        <Chats />



<Box
            
                sx={{


                    width: sidebar.open ? 'calc(100vw - 740px)' : 'calc(100vw - 420px)' ,
                    backgroundColor: theme.palette.mode == "light" ?"#F0F4FA" : theme.palette.background.default ,
                    boxShadow: "0px 0px 2px rgba(0,0,0,0.25)"

                }}>
  {/*conversation*/}
  <Conversation/>
        </Box>

        {/* contact */}
        {
          sidebar.open && <Contact/>
        }
        

      </Stack>


    </>
  );
};

export default GeneralApp;
