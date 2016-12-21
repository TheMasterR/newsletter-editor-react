/**
 * Created by bulanmaster on 21.12.2016.
 */

import React, { Component, PropTypes } from 'react';

class BaseISelect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: props.defaultOption !== '' ? props.defaultOption : props.optionsList[0],
            open: false,
        };
        this.onSelectClick = this.onSelectClick.bind(this);
    }

    onSelectClick() {
        this.setState({
            open: !this.state.open,
        });
    }

    onOptionClick(option) {
        this.setState({
            selectedOption: option,
        });
    }

    render() {
        const { optionsList, defaultOption, skin } = this.props;
        const { selectedOption, open } = this.state;

        const options = optionsList.map((option) => {
            return (
                <div
                    key={option}
                    className={`option${selectedOption === option ? ' selected' : ''}`}
                    onClick={this.onOptionClick.bind(this, option)}
                >
                    {option}
                </div>
            );
        });

        const optionsContainer = open ? (
                <div className="optionsContainer">{options}</div>
            ) : null;

        return (
            <span
                className={`baseISelect ${skin}`}
                onClick={this.onSelectClick}
            >
				<span className="selectedOption">
					{selectedOption}
				</span>
                {optionsContainer}
			</span>
        );
    }
}

BaseISelect.propTypes = {
    optionsList: PropTypes.array.isRequired,
    defaultOption: PropTypes.string,
    skin: PropTypes.oneOf([
        'white', 'black'
    ]),
};

BaseISelect.defaultProps = {
    defaultOption: '',
    skin: 'white',
};

export default BaseISelect;
