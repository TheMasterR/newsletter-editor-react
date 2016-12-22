/**
 * Created by bulanmaster on 21.12.2016.
 */

import React, { Component } from 'react';
import PreviewContainer from '../containers/PreviewContainer';
import InspectorContainer from '../containers/InspectorContainer';

class Editor extends Component {
    render() {
        return (
            <div className="editor">
                <PreviewContainer />
                <InspectorContainer />
            </div>
        );
    }
}

export default Editor;
