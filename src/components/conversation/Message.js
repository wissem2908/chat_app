import { Box, Stack } from '@mui/material'
import React from 'react'
import { Chat_History } from '../../data'
import { DocMsg, LinkMsg, MediaMsg, ReplyMsg, TextMsg, TimeLine } from './MsgTypes'

const Message = ({menu}) => {
  return (
   
    <Box p={3}>

        <Stack spacing={3}>
{
    Chat_History.map((el)=>{
        switch (el.type) {
            case "divider":
                //timeline
                return <TimeLine el={el}/>
               
            case "msg":
                switch (el.subtype) {
                    case "img":
                        //img msg
                        return <MediaMsg el={el} menu={menu}/>
                        
                    case "doc":
                        //Doc msg
                        return <DocMsg el={el} menu={menu}/>
                     
                    case "link":
                        //link msg
                        return <LinkMsg el={el} menu={menu}/>
                       
                    case "reply":
                            //reply msg
                           return <ReplyMsg el={el} menu={menu}/>
                        
                    default:
                        //text message
                        return <TextMsg el={el}/>
                      
                }
                break;
        
            default:
                return <></>
                break;
        }
    })
}
        </Stack>
    </Box>
  )
}

export default Message