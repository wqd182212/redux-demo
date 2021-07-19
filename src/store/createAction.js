import { HANDLE_CHANGE, HANDLE_ADD, HANDLE_DELETE } from './action';

export const handleChangeAction = (value) => ({
    type: HANDLE_CHANGE,
    value,
});

export const handleAddAction = (value) => ({
    type: HANDLE_ADD,
    value,
});

export const handleDeleteAction = (value) => ({
    type: HANDLE_DELETE,
    value,
});