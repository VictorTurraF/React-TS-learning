import React from 'react';
import './App.css';

import { Container, CssBaseline, Box } from "@material-ui/core";
import { PostCard } from "./components";

const App = () => {
    return (
        <div className="App">
            <CssBaseline />
            <Box mt={2} clone>
                <Container fixed>
                    <PostCard />
                </Container>
            </Box>
        </div>
    );
};

export default App;
