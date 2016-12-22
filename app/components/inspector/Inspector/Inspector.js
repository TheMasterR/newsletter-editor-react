/**
 * Created by bulanmaster on 21.12.2016.
 */

import React, { Component, PropTypes } from 'react';
import BaseIInput from '../BaseIInput/BaseIInput';
import BaseILabel from '../BaseILabel/BaseILabel';
import BaseISelect from '../BaseISelect/BaseISelect';
import BaseISeparator from '../BaseISeparator/BaseISeparator';
import BaseISwitch from '../BaseISwitch/BaseISwitch';

class Inspector extends Component {
    render() {
        const { onHideInspector, open, x, y } = this.props;

        const inspector = open ? (
                <div className="inspectorContainer">
                    <div
                        className="close"
                        onClick={onHideInspector}
                    />
                    <BaseILabel
                        label="Newsletter minimum width (in pixels): "
                    />
                    <BaseIInput
                        type="number"
                        placeholder="Newsletter minimum width (in pixels)"
                    />
                    <br />
                    <BaseILabel
                        label="Newsletter maximum width (in pixels): "
                    />
                    <BaseIInput
                        type="number"
                        placeholder="Newsletter maximum width (in pixels)"
                    />
                    <BaseISeparator />
                    <BaseILabel
                        label="Newsletter background type: "
                    />
                    <BaseISelect
                        optionsList={['Simple', 'Gradient']}
                    />
                    <br />
                    <BaseILabel
                        label="Radial gradient "
                    />
                    <BaseISwitch />
                    <br />
                    <BaseILabel
                        label="Newsletter background color: "
                    />
                    <BaseIInput
                        type="color"
                        placeholder="Newsletter background"
                    />
                    <BaseISeparator />
                    <BaseILabel
                        label="Link to the logo: "
                    />
                    <BaseIInput
                        type="text"
                        placeholder="Link to the logo"
                    />
                    <br />
                    <BaseILabel
                        label="Logo size: "
                    />
                    <BaseISelect
                        optionsList={['Small', 'Medium', 'Big']}
                        defaultOption="Medium"
                    />
                    <br />
                    <BaseILabel
                        label="Logo alt: "
                    />
                    <BaseIInput
                        type="text"
                        placeholder="Logo alt"
                    />
                </div>
            ) : null;

        return (
            <div
                className="inspector"
                style={{
                    left: x,
                    top: y,
                    transition: 'left .3s, top .3s',
                }}
            >
                {inspector}
            </div>
        );
    }
}

Inspector.propTypes = {
    onHideInspector: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
};

export default Inspector;
