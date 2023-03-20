import React from 'react';
import './App.css';
import ImagePickerComponent from "./components/ImagePickerComponent";
import NavbarComponent from "./components/NavbarComponent";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ImageTrimComponent from "./components/ImageTrimComponent";


function App() {
  return (
      <div className="App">

          <BrowserRouter>
              <NavbarComponent/>
              <Routes>

                  <Route path = "/pick" element={<ImagePickerComponent/>}/>
                  <Route path = "/trim" element={<ImageTrimComponent/>}/>
              </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;
