/**
 * Created by bulanmaster on 21.12.2016.
 */

import React, { Component, PropTypes } from 'react';

class BaseISeparator extends Component {
    render() {
        const { thickness, skin } = this.props;

        return (
            <div
                className={`baseISeparator ${skin}`}
                style={{
                    height: `${thickness}px`,
                }}
            />
        );
    }
}

BaseISeparator.propTypes = {
    thickness: PropTypes.number,
    skin: PropTypes.oneOf([
        'white', 'gray'
    ]),
};

BaseISeparator.defaultProps = {
    thickness: 1,
    skin: 'white',
};
