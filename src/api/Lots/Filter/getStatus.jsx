import {STATUS} from "../../../Fetch/settings"
import { cacheRequest } from "./cacheRequest";

export const getStatus = (setStatus) => {
    const url = STATUS;
    cacheRequest(url, setStatus, 'statusData');
};