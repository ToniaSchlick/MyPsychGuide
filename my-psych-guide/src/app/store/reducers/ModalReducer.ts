import { createReducer } from "@reduxjs/toolkit";
import {ReactElement} from "react";

export interface ModalState {
    readonly content: ReactElement<any> | null;
    readonly modalProps?: {
        [propName: string]: any;
    };
}

const initialState: ModalState = {
    content: null,
    modalProps: undefined,
};

export default createReducer(initialState, {
    /**
     * Handle open modal request. Sets content of modal and props to pass to it
     * @param   {Object} state  Current reducer state
     * @param   {Object} action Action details
     */
    OPEN_MODAL(_, action) {
        return {
            content: action.payload.content,
            modalProps: action.payload.modalProps,
        };
    },

    /**
     * Change the props for the currently displayed modal
     */
    CHANGE_MODAL_PROPS(state, action) {
        return {
            ...state,
            modalProps: {
                ...state.modalProps,
                ...action.payload,
            },
        };
    },

    /**
     * Close modal, resets state to initial state, i.e. no modal
     */
    CLOSE_MODAL() {
        return initialState;
    },
});
