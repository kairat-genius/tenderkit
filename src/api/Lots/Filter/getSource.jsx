import {SOURCE} from "../../../Fetch/settings"
import { cacheRequest } from "./cacheRequest";

export const getSource = (setSource) => {
    const url = SOURCE;
    cacheRequest(url, setSource, 'sourceData');
};