import {PURCHASETYPE} from "../../../Fetch/settings"
import { cacheRequest } from "./cacheRequest";

export const getPurchaseType = (setPurchaseType) => {
    const url = PURCHASETYPE;
    cacheRequest(url, setPurchaseType, 'purchaseTypeData');
};