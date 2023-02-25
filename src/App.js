import React, {Component} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Index from "./Components/Index/Index"
import CardPage from "./Components/CardPage/CardPage";

class App extends Component {
    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Index/>}/>
                        <Route path="/:id" element={<CardPage/>}/>
                    </Routes>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
