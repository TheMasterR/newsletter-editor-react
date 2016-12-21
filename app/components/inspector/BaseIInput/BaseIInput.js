/**
 * Created by bulanmaster on 21.12.2016.
 */

import React, { Component, PropTypes } from 'react';

class BaseIInput extends Component {
    render() {
        const { type, placeholder } = this.props;

        return (
            <input className="baseIInput" type={type} placeholder={placeholder} />
        );
    }
}

BaseIInput.propTypes = {
    type: PropTypes.oneOf([
        'text', 'number', 'color'
    ]),
    placeholder: PropTypes.string,
};

BaseIInput.defaultProps = {
    type: 'text',
    placeholder: '',
};
