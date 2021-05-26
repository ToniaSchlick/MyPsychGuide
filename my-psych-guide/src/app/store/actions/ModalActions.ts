import {ReactElement} from "react";
import {ModalProps} from '../../components/atom/Modal';

/**
 * Open modal with the provided content and modal props
 * @param  content    Content to display within modal
 * @param  modalProps Props to pass to Modal component
 */
export function open(content: ReactElement<any>, modalProps: ModalProps) {
    return {
        type: "OPEN_MODAL",
        payload: {
            content,
            modalProps,
        },
    };
}

/**
 * Tweak the props of an existing modal that is already open
 */
export function changeModalProps(modalProps: ModalProps) {
    return {
        type: "CHANGE_MODAL_PROPS",
        payload: modalProps,
    };
}

/**
 * Close down the currently displayed modal
 */
export function close() {
    return {type: "CLOSE_MODAL"};
}
