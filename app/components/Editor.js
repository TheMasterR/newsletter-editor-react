/**
 * Created by bulanmaster on 21.12.2016.
 */

import React, { Component } from 'react';
import BasePButton from './preview/BasePButton';
import BasePImage from './preview/BasePImage';
import BasePLink from './preview/BasePLink';
import BasePText from './preview/BasePText';

class Editor extends Component {
    render() {
        return (
            <div className="editor">
                <BasePButton label="Lorem ipsum" href="#" />
                <BasePImage src="" altText="Lorem ipsum" />
                    <BasePLink href="#">
                    Lorem ipsum
                </BasePLink>
                <BasePText text="Lorem ipsum" />
            </div>
        );
    }
}

export default Editor;
