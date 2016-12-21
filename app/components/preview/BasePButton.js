/**
 * Created by bulanmaster on 21.12.2016.
 */

import React, { Component, PropTypes } from 'react';

class BasePButton extends Component {
    render() {
        const { label, href, backgroundColor, color, borderWidth, borderStyle, borderColor } = this.props;

        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                    backgroundColor,
                    border: `${borderWidth}px ${borderStyle} ${borderColor}`,
                    borderRadius: '3px',
                    color,
                    display: 'inline-block',
                    padding: '10px 20px',
                    textDecoration: 'none',
                }}
            >
                {label}
            </a>
        );
    }
}

BasePButton.propTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string,
    color: PropTypes.string,
    borderWidth: PropTypes.number,
    borderStyle: PropTypes.oneOf([
        'solid', 'dashed', 'none'
    ]),
    borderColor: PropTypes.string,
};

BasePButton.defaultProps = {
    backgroundColor: '#000000',
    color: '#ffffff',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#000000',
};
