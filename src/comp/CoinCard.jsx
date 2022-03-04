import React from 'react'
import Paper from '@mui/material/Paper';
import Switch from '@mui/material/Switch';

export default function CoinCard({ coin, addToFavorites, removeFromFavorites, favoriteArr }) {
    console.log(coin.id)
    return (
        <div>
            <Paper
                sx={{
                    m: 1,
                    width: 128,
                    height: 128,
                    padding: 3,
                }}
                elevation={6}>

                <Switch
                    defaultChecked={favoriteArr.find(c => c.id == coin.id)}
                    onChange={(e)=>{
                        if(e.target.checked){
                            addToFavorites(coin)
                        }else{
                            removeFromFavorites(coin.id)
                        }
                    }}  />
                <p>{coin.id}</p>
                <h5>{coin.current_price.toLocaleString()}</h5>
            </Paper>
        </div >
    )
}
