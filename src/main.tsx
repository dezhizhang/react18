import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


function BatchState() {
    return <div>hello</div>
}

(ReactDOM as any).createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <Routes>
            <Route path="/hello" element={<BatchState />}/>

        </Routes>
    </BrowserRouter>

)