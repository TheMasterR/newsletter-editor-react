/**
 * Created by bulanmaster on 21.12.2016.
 */

import React, { Component, PropTypes } from 'react';
import BasePButton from '../BasePButton';
import BasePImage from '../BasePImage';
import BasePLink from '../BasePLink';
import BasePText from '../BasePText';

class Preview extends Component {
    render() {
        const { onShowInspector } = this.props;

        return (
            <div className="preview" onClick={onShowInspector()}>
                <BasePButton label="Lorem ipsum" href=""/>
                <BasePImage src="#" altText="Lorem ipsum" />
                <BasePLink href="#">
                    Lorem ipsum
                </BasePLink>
                <BasePText text="Lorem ipsum" />
            </div>
        );
    }
}

Preview.propTypes = {
    onShowInspector: PropTypes.func.isRequired,
};

export default Preview;
