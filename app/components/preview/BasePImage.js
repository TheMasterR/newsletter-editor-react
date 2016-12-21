/**
 * Created by bulanmaster on 21.12.2016.
 */

import React, { Component, PropTypes } from 'react';

class BasePImage extends Component {
    render() {
        const { src, altText, height, width } = this.props;

        return (
            <img
                src={src}
                alt={altText}
                height={height}
                width={width}
            />
        );
    }
}

BasePImage.propTypes = {
    src: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired,
    height: PropTypes.string,
    width: PropTypes.string,
};

BasePImage.defaultProps = {
    height: 'auto',
    width: 'auto',
};
