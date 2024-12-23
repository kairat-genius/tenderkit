import axios from 'axios'
import {LOT_LIST, accessToken} from "../../Fetch/settings"

export const getListLots = async ({setData, setCount, offset, filters, sortOption}) => { 
    const headers = accessToken
    ? { 'Authorization': `JWT ${accessToken}` }
    : {};

    const params = {
        offset,
        ...(filters.totalPrice_from && { totalPrice_from: filters.totalPrice_from }),
        ...(filters.totalPrice_to && { totalPrice_to: filters.totalPrice_to }),
        ...(filters.startDate_from && { startDate_from: filters.startDate_from }),
        ...(filters.startDate_to && { startDate_to: filters.startDate_to }),
        ...(filters.endDate_from && { endDate_from: filters.endDate_from }),
        ...(filters.endDate_to && { endDate_to: filters.endDate_to }),
        ...(filters.lotNumber && { lotNumber: filters.lotNumber }),
        ...(filters.purchaseType && filters.purchaseType.length > 0 && { purchaseType: `[${filters.purchaseType.map(item => `'${item}'`).join(",")}]` }),
        ...(filters.source && filters.source.length > 0 && { source: `[${filters.source.map(item => `'${item}'`).join(",")}]` }),
        ...(filters.status && filters.status.length > 0 && { status: `[${filters.status.map(item => `'${item}'`).join(",")}]` }),
        ...(filters.tenderSubjectType && filters.tenderSubjectType.length > 0 && { tenderSubjectType: `[${filters.tenderSubjectType.map(item => `'${item}'`).join(",")}]` }),
        ...(filters.organizer && filters.organizer.length > 0 && { organizer: `[${filters.organizer.map(item => `'${item}'`).join(",")}]` }),
        ...(filters.deliveryRegion && filters.deliveryRegion.length > 0 && { deliveryRegion: `[${filters.deliveryRegion.map(item => `'${item}'`).join(",")}]` }),

        ...(filters.search && filters.search.length > 0 && { search: `[${filters.search.map(item => `'${item}'`).join(",")}]` }),
        ...(filters.exclude && filters.exclude.length > 0 && { exclude: `[${filters.exclude.map(item => `'${item}'`).join(",")}]` }),

        ...(sortOption && { order_by: sortOption }),
       
      };
      
      try {
        const response = await axios.get(LOT_LIST, { headers, params });
        setData(response.data.results);
        setCount(response.data.count);
    } catch (error) {
       
    }
};
