/**
 * Created by bulanmaster on 21.12.2016.
 */

import React, { Component, PropTypes } from 'react';

class BasePLink extends Component {
    render() {
        const { children, href, underline, skin } = this.props;

        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                    color: skin,
                    textDecoration: underline,
                }}
            >
                {children}
            </a>
        );
    }
}

BasePLink.propTypes = {
    children: PropTypes.node.isRequired,
    href: PropTypes.string.isRequired,
    underline: PropTypes.string,
    skin: PropTypes.oneOf([
        'black', 'white',
    ]),
};

BasePLink.defaultProps = {
    underline: 'underline',
    skin: 'black',
};
