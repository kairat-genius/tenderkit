import {SUBJECTTYPE} from "../../../Fetch/settings"
import { cacheRequest } from "./cacheRequest";
export const getSubjectType = (setSubjectType) => {
    const url = SUBJECTTYPE;
    cacheRequest(url, setSubjectType, 'subjectTypeData');
};