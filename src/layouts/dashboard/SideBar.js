import React, { useState } from "react";
import { Avatar, Box, IconButton, Menu, MenuItem, Switch } from '@mui/material';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import { Gear } from 'phosphor-react'
import { useTheme, styled } from '@mui/material/styles';


import useSettings from '../../hooks/useSettings';

import { faker } from '@faker-js/faker'

import logo from '../../assets/Images/logo.ico';
import { Nav_Buttons, Profile_Menu } from '../../data';
import AntSwitch from "../../components/AntSwitch";



const SideBar = () => {
    const { onToggleMode } = useSettings()
    const theme = useTheme()
  
    console.log(theme)
  
  
    const [selected, setSelected] = useState(0)



    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };



  return (
    <Box
    sx={{
      backgroundColor: theme.palette.background.paper,
      boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
      height: "100vh", width: 100
    }}
  >

    <Stack
      p={2}
      direction="column"
      alignItems="center"
      justifyContent='space-between'
      spacing={3}
      sx={{ height: "100%" }}
    >
      <Stack
        alignItems={"center"}
        spacing={4}
      >
        <Box

          sx={{
            backgroundColor: theme.palette.primary.main,
            height: 64,
            width: 64,
            borderRadius: 1.5,
          }}>
          <img

            src={logo}
            alt={"chat app logo"}
          />
        </Box>
        <Stack
          spacing={3}
          sx={{
            width: "max-content",
            direction: "column",
            alignItems: 'center'


          }}
        >
          {
            Nav_Buttons.map((el) =>

              el.index === selected ?
                <Box

                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: 1.5,
                  }}


                >
                  <IconButton sx={{ width: "max-content", color: "#fff" }} key={el.index}>{el.icon}</IconButton>

                </Box> :


                <IconButton onClick={() => setSelected(el.index)} sx={{ width: "max-content", color: theme.palette.mode == "light" ? "#000" : theme.palette.text.primary }}>
                  {el.icon}
                </IconButton>





            )}


          <Divider sx={{
            width: '48px'
          }} />

          {
            selected === 3 ?

              <Box

                sx={{
                  backgroundColor: theme.palette.primary.main,
                  borderRadius: 1.5,
                  color: '#fff'
                }}


              >
                <IconButton
                  sx={{ width: "max-content", color: "#fff" }}
                >
                  <Gear />
                </IconButton>
              </Box> :
              <IconButton onClick={() => setSelected(3)} sx={{ width: "max-content", color: theme.palette.mode == "light" ? "#000" : theme.palette.text.primary }} >
                <Gear />
              </IconButton>

          }

        </Stack>
      </Stack>



      <Stack spacing={4}>
        <AntSwitch defaultChecked

          onChange={() => {
            onToggleMode()
          }}
        />
        <Avatar id="basic-button" src={faker.image.avatar()}
         aria-controls={open ? 'basic-menu' : undefined}
         aria-haspopup="true"
         aria-expanded={open ? 'true' : undefined}
         onClick={handleClick} 
        
        />

        <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}

                anchorOrigin={{
                  vertical:"bottom",
                        horizontal:"right",
                }}
                transformOrigin={{
                        vertical:"bottom",
                        horizontal:"left",
                }}
            >
                    <Stack spacing={1} px={1}>
                    {Profile_Menu.map((el) => (
                        <MenuItem key={el.id} onClick={handleClose}>
                          <Stack sx={{width:100}} direction="row" alignItems={"center"} justifyContent={"space-between"} >
                            <span>
                            {el.title}
                            </span>
                          {el.icon}
                          </Stack>
                           
                        </MenuItem>
                    ))}
                </Stack>
            </Menu>
      </Stack>

    </Stack>

  </Box>
  )
}

export default SideBar