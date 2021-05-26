import {ReactElement} from "react";
import {AnyAction} from "redux";
import {ModalProps} from '../../components/atom/Modal';

export interface ActionToPayloadMap {
    OPEN_MODAL: {
        content: ReactElement<any>;
        modalProps: ModalProps;
    };
    CHANGE_MODAL_PROPS: ModalProps;
    CLOSE_MODAL: null;
}

export type ActionTypeUnion = keyof ActionToPayloadMap;

export type ActionPayload<ActionType extends ActionTypeUnion> = ActionToPayloadMap[ActionType];

export interface ActionObject<K extends ActionTypeUnion> extends AnyAction {
    type: K;
    payload: ActionPayload<K>;
}

export type Action = {[P in ActionTypeUnion]: ActionObject<P>}[ActionTypeUnion];

