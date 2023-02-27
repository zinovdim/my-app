import React from 'react';
import './App.css';
import Accordion from "./components/Accordion";
import {Star} from "./components/Star";

function App(props: any) {
    console.log("App rendering")
    return (
        <div className="App">
            Article1
            <Star value={1} />
            <Accordion titleValue={"МЕНЮ"} collapsed={false}/>
            <Accordion titleValue={"КАТАЛОГ"} collapsed={false}/>
            Article2
            <Star value={4} />
        </div>
    );
}

export default App;
