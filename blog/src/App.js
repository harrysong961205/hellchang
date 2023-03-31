//App.js
import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './MainHome';
import Cal from './Cal';

function App() {
    return (
        <BrowserRouter>
            <div className="App1">
                <Routes>
                    <Route path="/MainHome" element={<Home />} />
                    <Route path="/Cal" element={<Cal />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}


export default App;