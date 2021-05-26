import {combineReducers} from "redux";
import modal, {ModalState} from '../store/reducers/ModalReducer';


export interface AllStore {
    modal: ModalState;
    // policy: PolicyState;
    // project: ProjectState;
    // segment: SegmentState;
    // serviceKey: ServiceKeyState;
}

export default combineReducers<AllStore>({
    modal,
    // policy,
    // project,
    // segment,
    // serviceKey,
} as any); //The core redux types need some work and will be addressed in Redux 4.0. Until then, any away
