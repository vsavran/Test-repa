import React from 'react';
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import {theme} from "./Theme";

function MockTheme({ children }) {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default MockTheme;