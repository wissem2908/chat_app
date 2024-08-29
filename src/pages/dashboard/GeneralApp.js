import React, { Suspense, lazy } from "react";
import Chats from './Chats'
import { Stack ,Box} from "@mui/material";
import { styled ,useTheme} from '@mui/material/styles'
import Conversation from "../../components/conversation";
import Contact from "../../components/Contact";

const GeneralApp = () => {


  const theme = useTheme();
  return (
    <>
      <Stack direction="row" sx={{ width:"100%"}}>

        {/*chats */}
        <Chats />



<Box
            
                sx={{


                    width: 'calc(100vw - 740px)',
                    backgroundColor: theme.palette.mode == "light" ?"#F0F4FA" : theme.palette.background.default ,
                    boxShadow: "0px 0px 2px rgba(0,0,0,0.25)"

                }}>
  {/*conversation*/}
  <Conversation/>
        </Box>

        {/* contact */}
        <Contact/>

      </Stack>


    </>
  );
};

export default GeneralApp;
