/**
 * Created by bulanmaster on 21.12.2016.
 */

import React, { Component, PropTypes } from 'react';

class BaseILabel extends Component {
    render() {
        const { label, skin } = this.props;

        return (
            <span className={`baseILabel ${skin}`} >
                {label}
            </span>
        );
    }
}

BaseILabel.propTypes = {
    label: PropTypes.string.isRequired,
    skin: PropTypes.oneOf([
        'white', 'black',
    ]),
};

export default BaseILabel;
