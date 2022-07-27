import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import './App.css';
import Layout from "./components/Layout";
import Home from "./components/Home";
import NewContact from "./components/NewContact";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import NoPage from "./components/NoPage";
import reportWebVitals from './reportWebVitals';
import SearchandData from './components/SearchandData';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Login" element={<Login/>} />
          <Route path="NewContact" element={<NewContact />} />
          <Route path='SignUp' element={<SignUp/>}/>
          <Route path="SearchandData" element={<SearchandData/>}/>
          <Route path="*" element={<NoPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
