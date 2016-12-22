/**
 * Created by bulanmaster on 21.12.2016.
 */

import { connect } from 'react-redux';
import { showInspector, hideInspector } from '../actions/inspector';
import Inspector from '../components/inspector/Inspector/Inspector';

const mapStateToProps = (state) => {
    return {
        open: state.inspector.get('open'),
        x: 100,
        y: 100,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onShowInspector() {
            dispatch(showInspector());
        },
        onHideInspector() {
            dispatch(hideInspector());
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Inspector);
