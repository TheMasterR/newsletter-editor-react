/**
 * Created by bulanmaster on 21.12.2016.
 */

import { connect } from 'react-redux';
import { showInspector, hideInspector } from '../actions/inspector';
import Preview from '../components/preview/Preview/Preview';

const mapStateToProps = (state) => {
    return {
        open: state.inspector.get('open'),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onShowInspector() {
            dispatch(showInspector());
        },
        onHideInspector() {
            dispatch(hideInspector());
        },
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Preview);
