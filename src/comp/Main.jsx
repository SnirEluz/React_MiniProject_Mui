import React from 'react'
import { Route, Routes } from 'react-router-dom';
import About from './About';
import Coins from './Coins'
import Favorite from './Favorite';
import Page404 from './Page404';

export default function Main({
    coinsArr,
    favoriteArr,
    addToFavorites,
    removeFromFavorites}) {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Coins
                    coinsArr={coinsArr}
                    favoriteArr={favoriteArr}
                    addToFavorites={addToFavorites}
                    removeFromFavorites={removeFromFavorites}
                /> } />
                <Route path="/favorite" element={<Favorite
                    favoriteArr={favoriteArr}
                    removeFromFavorites={removeFromFavorites}
                /> } />
                <Route path="/about" element={<About />} />
                <Route path="/*" element={<Page404 />} />
            </Routes>
        </div>
    )
}
