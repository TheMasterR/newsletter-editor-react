import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const App = ({ children }) =>
    <div className="editorInnerContainer">
        { children }
        <footer>
            <Link to="/">Newsletter editor</Link>
            <Link to="/about">About</Link>
        </footer>
    </div>;

App.propTypes = {
    children: PropTypes.object
};

export default App;
