/**
 * Created by bulanmaster on 21.12.2016.
 */

import React, { Component, PropTypes } from 'react';

class BasePText extends Component {
    render() {
        const { text, color, fontSize } = this.props;

        return (
            <span
                style={{
                    color,
                    fontSize: `${fontSize}px`,
                }}
            >
                {text}
            </span>
        );
    }
}

BasePText.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string,
    fontSize: PropTypes.number,
};

BasePText.defaultProps = {
    color: '#000000',
    fontSize: 14,
};

export default BasePText;
