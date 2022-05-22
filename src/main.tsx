import React from "react";
import { createRoot } from "react-dom/client";
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


const Home = () => <h1>hello world</h1>

createRoot(document.getElementById('root')!).render(<Home/>)
