/**
 * Created by bulanmaster on 21.12.2016.
 */

import React, { Component, PropTypes } from 'react';

class BaseISwitch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            on: props.on,
        };
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.setState({
            on: !this.state.on,
        });
    }

    render() {
        const { skin } = this.props;
        const { on } = this.state;

        return (
            <span
                className={`baseISwitch ${skin}`}
                onClick={this.onClick}
            >
				<span className={`baseISwitch-inner${on ? ' on' : ''}`} />
			</span>
        );
    }
}

BaseISwitch.propTypes = {
    on: PropTypes.bool,
    skin: PropTypes.oneOf([
        'white', 'black'
    ]),
};

BaseISwitch.defaultProps = {
    on: false,
    skin: 'white',
};
