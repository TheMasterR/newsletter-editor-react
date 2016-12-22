/**
 * Created by bulanmaster on 21.12.2016.
 */

import {Map as iMap} from 'immutable';
import { SHOW_INSPECTOR, HIDE_INSPECTOR } from '../actions/types';

const initialState = iMap({
    open: false,
});

const inspector = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_INSPECTOR:
            return state.merge({
                open: true,
            });
        case HIDE_INSPECTOR:
            return state.merge({
                open: false,
            });
        default:
            return state;
    }
};


export default inspector;
