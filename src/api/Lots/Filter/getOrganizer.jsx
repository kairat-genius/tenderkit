import {ORGANIZER} from "../../../Fetch/settings"
import { cacheRequest } from "./cacheRequest";

export const getOrganizer = (setOrganizer, searchTerm) => {
    const url = `${ORGANIZER}?search=${searchTerm}`;
    cacheRequest(url, setOrganizer, 'organizerData', { search: searchTerm });
};