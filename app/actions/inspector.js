/**
 * Created by bulanmaster on 21.12.2016.
 */

import { SHOW_INSPECTOR, HIDE_INSPECTOR } from './types';

export const showInspector = (x, y) => {
    return {
        type: SHOW_INSPECTOR,
        x,
        y,
    };
};

export const hideInspector = () => {
    return {
        type: HIDE_INSPECTOR,
    };
};
