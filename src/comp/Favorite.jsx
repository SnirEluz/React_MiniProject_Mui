import React from 'react'
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';




export default function Favorite({ favoriteArr, removeFromFavorites }) {
    return (
        <div>
            <h1>Fave</h1>
            {
                favoriteArr.map(coin => <Paper elevation={3}
                    sx={{
                        m: 1,
                        width: 128,
                        height: "auto",
                        padding: 3,
                    }}
                    elevation={6}>

                    <Avatar alt="Remy Sharp" src={coin.image} />
                    <h2>{coin.id}</h2>
                    <h5>{coin.current_price}</h5>
                    <Button
                      onClick={()=>removeFromFavorites(coin.id)}
                      variant="outlined"
                      startIcon={<DeleteIcon />}>Remove
                    </Button>
                </Paper>)
            }
        </div>
    )
}
