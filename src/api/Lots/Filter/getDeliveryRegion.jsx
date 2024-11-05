import {DELIVERY_REGION} from "../../../Fetch/settings"
import { cacheRequest } from "./cacheRequest";
export const getDeliveryRegion = (setRegion) => {
    const url = DELIVERY_REGION;
    cacheRequest(url, setRegion, 'deliveryRegion');
};