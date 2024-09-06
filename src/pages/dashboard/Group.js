import { Box, IconButton, Stack, Typography, Link, Divider } from '@mui/material'
import { useTheme, styled } from '@mui/material/styles'
import { MagnifyingGlass, Plus } from 'phosphor-react'
import React, { useState } from 'react'
import { Search, SearchIconWrapper, StyledInputBase } from '../../components/Search'
import SimpleBarStyle from '../../components/Scrollbar';  // Correct import for scrollbar

import { ChatList } from '../../data';
import ChatElement from '../../components/ChatElement'
import CreateGroup from '../../sections/main/CreateGroup'


const Group = () => {

  const [openDialog, setOpenDialog] = useState(false)

  const handleCloseDialog = () => {
    setOpenDialog(false)
  }

  const theme = useTheme()
  return (
    <>
      <Stack direction={"row"} sx={{
        width: "100%"
      }} >
        {/*left  */}
        <Box sx={{
          height: "100vh",
          backgroundColor: (theme) => theme.palette.mode == "light" ? "#F8FAFF" : theme.palette.background,
          width: 320,
          boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",

        }} >
          <Stack p={3} spacing={2} sx={{ height: "100vh" }}>
            <Stack direction="row" alignItems={"center"} justifyContent={"space-between"}>
              <Typography variant='h5'>Groups</Typography>

            </Stack>
            <Stack sx={{ width: "100%" }}>
              <Search>
                <SearchIconWrapper>
                  <MagnifyingGlass color="#709CE6" />
                </SearchIconWrapper>
                <StyledInputBase placeholder="Search..." inputProps={{ "aria-label": "search" }} />
              </Search>
            </Stack>
            <Stack direction="row" justifyContent="space-between" alignItems={"center"}  >
              <Typography variant="subtitle2" component={Link} >
                Create New Group
              </Typography>
              <IconButton onClick={() => {
                setOpenDialog(true)
              }}>
                <Plus style={{
                  color: (theme) => theme.palette.primary.main
                }} />

              </IconButton>
            </Stack>
            <Divider />
            <Stack spacing={3} direction="column" sx={{ flexGrow: 1, overflow: 'hidden', height: "100%" }}>
              <SimpleBarStyle timeout={500} clickOnTrack={false}>
                <Stack spacing={2.5}>
                  <Typography variant="subtitle2" sx={{ color: "#676767" }}>Pinned</Typography>
                  {ChatList.filter((el) => el.pinned).map((el) => <ChatElement key={el.id} {...el} />)}
                </Stack>

                <Stack spacing={2.5}>
                  <Typography variant="subtitle2" sx={{ color: "#676767" }}>All Groups</Typography>
                  {ChatList.filter((el) => !el.pinned).map((el) => <ChatElement key={el.id} {...el} />)}
                </Stack>
              </SimpleBarStyle>
            </Stack>
          </Stack>

        </Box>

        {/*right  */}

      </Stack>


      {
        openDialog && <CreateGroup open={openDialog} handleClose={handleCloseDialog} />
      }




    </>
  )
}

export default Group