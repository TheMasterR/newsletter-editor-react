/**
 * Created by bulanmaster on 21.12.2016.
 */

import { connect } from 'react-redux';
import { showInspector } from '../actions/inspector';
import Preview from '../components/preview/Preview/Preview';

const mapStateToProps = (state) => {
    return {
        open: state.inspector.get('open'),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onShowInspector(ev) {
            const x = ev.pageX;
            const y = ev.pageY;

            dispatch(showInspector(x, y));
        },
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Preview);
