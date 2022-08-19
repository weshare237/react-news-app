import * as React from 'react'
import Box from '@mui/material/Box'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'
import MenuIcon from '@mui/icons-material/Menu'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import categories from '../data/category'
import { NewsState } from '../context/NewsProvider'

type Anchor = 'top' | 'left' | 'bottom' | 'right'

const SideDrawer: React.FC = () => {
  const [state, setState] = React.useState({
    left: false,
  })

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  })

  const { setCategory } = NewsState()

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return
      }

      setState({ ...state, [anchor]: open })
    }

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: 200, paddingLeft: '10px', paddingRight: '5px' }}
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem disablePadding>CATEGORIES</ListItem>
      </List>
      <Divider />
      <List>
        {categories.map((text, index) => (
          <ListItem
            button
            key={text}
            disablePadding
            onClick={() => setCategory(text)}
            style={{ height: 40, borderRadius: 3 }}
          >
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <div>
      <React.Fragment key={'left'}>
        <Button onClick={toggleDrawer('left', true)}>
          <MenuIcon />
        </Button>
        <ThemeProvider theme={darkTheme}>
          <SwipeableDrawer
            anchor={'left'}
            open={state['left']}
            onClose={toggleDrawer('left', false)}
            onOpen={toggleDrawer('left', true)}
          >
            {list('left')}
          </SwipeableDrawer>
        </ThemeProvider>
      </React.Fragment>
    </div>
  )
}

export default SideDrawer
