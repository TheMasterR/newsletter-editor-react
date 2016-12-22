/**
 * Created by bulanmaster on 21.12.2016.
 */

import { connect } from 'react-redux';
import { hideInspector } from '../actions/inspector';
import Inspector from '../components/inspector/Inspector/Inspector';

const mapStateToProps = (state) => {
    return {
        open: state.inspector.get('open'),
        x: state.inspector.get('x'),
        y: state.inspector.get('y'),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onHideInspector() {
            dispatch(hideInspector());
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Inspector);
