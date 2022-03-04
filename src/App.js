import './App.css';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Header from './comp/Header'
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import CloseIcon from '@mui/icons-material/Close';
import Badge from '@mui/material/Badge';
import Main from './comp/Main';


function App() {

  const navigate = useNavigate()

  const [isNavOpen, setIsNavOpen] = useState(false)
  const [coinsArr, setCoinsArr] = useState([])
  const [favoriteArr, setFavoriteArr] = useState([])

  useEffect(() => {
    (async () => {
      const res = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&page=1&per_page=50")
      const data = await res.json()
      console.log(data)
      setCoinsArr(data)
    })()
  }, [])

  const addToFavorites = (coin) => {
    setFavoriteArr([...favoriteArr, coin])
  }
  const removeFromFavorites = (id) => {
    console.log("work")
    setFavoriteArr(favoriteArr.filter(coin => coin.id != id))
  }
  const travelTo = (dest) => {
    navigate("/" + dest)
    setIsNavOpen(false)
  }

  return (
    <div >
      <Header setIsNavOpen={setIsNavOpen} coinsArr={coinsArr} setCoinsArr={setCoinsArr} />
      <Drawer anchor="left" open={isNavOpen}>
        <List>
          <ListItem  >
            <ListItemButton onClick={() => setIsNavOpen(false)}>
              <ListItemIcon>
                <CloseIcon />
              </ListItemIcon>
              <ListItemText primary="" />
            </ListItemButton>
          </ListItem>
          <ListItem  >
            <ListItemButton onClick={() => travelTo("")}>
              <ListItemIcon>
                <AttachMoneyIcon />
              </ListItemIcon>
              <ListItemText primary="Coins" />
            </ListItemButton>
          </ListItem>
          <ListItem >
            <ListItemButton onClick={() => travelTo("favorite")}>
              <ListItemIcon>
                <Badge badgeContent={favoriteArr.length} color="primary">
                  <StarBorderIcon />
                </Badge>
              </ListItemIcon>
              <ListItemText primary="Favorite" />
            </ListItemButton>
          </ListItem>
          <ListItem >
            <ListItemButton onClick={() => travelTo("about")}>
              <ListItemIcon>
                <HelpOutlineIcon />
              </ListItemIcon>
              <ListItemText primary="About" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Main
        coinsArr={coinsArr}
        favoriteArr={favoriteArr}
        addToFavorites={addToFavorites}
        removeFromFavorites={removeFromFavorites}
      />
    </div>
  );
}

export default App;
