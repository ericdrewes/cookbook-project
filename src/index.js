import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from "material-ui/styles/getMuiTheme";
import { fade } from "material-ui/utils/colorManipulator";

import {BrowserRouter} from 'react-router-dom'

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: "#ffb74d",
        canvasColor: "#757575",
        primary2Color: "#ffa000",
        accent1Color: "#ef6c00"
    }
  });
  

ReactDOM.render(
    <BrowserRouter>
      <MuiThemeProvider muiTheme = {muiTheme}>
        <App />
      </MuiThemeProvider>
    </BrowserRouter>, 
    document.getElementById('root'));

