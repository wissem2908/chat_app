import { Avatar, Box, Stack, Badge, Typography, IconButton, Divider, TextField, InputAdornment } from '@mui/material'
import React from 'react'
import { faker } from "@faker-js/faker"
import { styled ,useTheme} from '@mui/material/styles'
import { CaretDown, LinkSimple, MagnifyingGlass, PaperPlaneTilt, Phone, Smiley, VideoCamera } from 'phosphor-react';
import Header from './Header';
import Footer from './Footer';
import Message from './Message';









const Conversation = () => {
    const theme = useTheme();
    return (

        <Stack height={"100%"} maxHeight='100vh' width={"auto"}>
            {/*Chat header */}
           <Header/>
            {/*message */}
            <Box width={"100%"} sx={{
                flexGrow: 1,
                height:"100%",
                overflowY:"scroll",

            }} >

                <Message menu={true}/>


            </Box>
            {/*Chat footer */}
         <Footer/>


        </Stack>
    )
}

export default Conversation