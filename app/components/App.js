import React from 'react';
import { Link } from 'react-router';
import Text from './preview/Text/Text';

const App = () =>
    <div>
        <Text text="Lorem ipsum" />
        <footer>
            <Link to="/">Filterable Table</Link>
            <Link to="/about">About</Link>
        </footer>
    </div>;

export default App;
