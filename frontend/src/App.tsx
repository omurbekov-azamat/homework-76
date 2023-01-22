import React from 'react';
import {Route, Routes} from "react-router-dom";
import Chat from "./containers/Chat";
import AppToolbar from "./components/UI/AppToolbar/AppToolbar";

function App() {
    return (
        <>
            <AppToolbar/>
            <Routes>
                <Route path='/' element={<h3>Click to chat</h3>}/>
                <Route path='/messages' element={<Chat/>}/>
            </Routes>
        </>
    );
}

export default App;
