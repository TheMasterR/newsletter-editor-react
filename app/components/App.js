import React from 'react';
import { Link } from 'react-router';
import BasePButton from './preview/BasePButton';
import BasePImage from './preview/BasePImage';
import BasePLink from './preview/BasePLink';
import BasePText from './preview/BasePText';

const App = () =>
    <div>
        <BasePButton label="Lorem ipsum" href="#" />
        <BasePImage src="" altText="Lorem ipsum" />
        <BasePLink href="#">
            Lorem ipsum
        </BasePLink>
        <BasePText text="Lorem ipsum" />
        <footer>
            <Link to="/">Filterable Table</Link>
            <Link to="/about">About</Link>
        </footer>
    </div>;

export default App;
