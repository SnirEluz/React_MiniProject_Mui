import React from 'react'
import CoinCard from './CoinCard'


export default function Coins({
    coinsArr,
    favoriteArr,
    addToFavorites,
    removeFromFavorites}) {
    return (
        <div className="coins">
            {coinsArr.map(coin => <CoinCard
            coin={coin}
            favoriteArr={favoriteArr}
            addToFavorites={addToFavorites}
            removeFromFavorites={removeFromFavorites}
            />)}
        </div>
    )
}
