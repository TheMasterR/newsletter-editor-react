/**
 * Created by bulanmaster on 21.12.2016.
 */

import React, { Component, PropTypes } from 'react';

class BaseLabel extends Component {
    render() {
        const { label, skin } = this.props;

        return (
            <span className={`baseLabel ${skin}`} >
                {label}
            </span>
        );
    }
}

BaseLabel.propTypes = {
    label: PropTypes.string.isRequired,
    skin: PropTypes.oneOf([
        'white', 'black',
    ]),
};
