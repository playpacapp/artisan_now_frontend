import { toast } from 'react-toastify';
import { alertConstants } from '../constants';

export const alertActions = {
    success,
    error,
    clear
};

function success(message) {
    toast(message)
    return { type: alertConstants.SUCCESS, message };
}

function error(message) {
    toast(message)
    return { type: alertConstants.ERROR, message };
}

function clear() {
    toast.clear()
    return { type: alertConstants.CLEAR };
}