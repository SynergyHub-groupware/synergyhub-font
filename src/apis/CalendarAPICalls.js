import { getEvents } from "../modules/CalendarModules";
import { request } from "./api";


export const callEventsAPI = () => {
    return async (dispatch, getState) => {
        const result = await request('GET', '/calendar/events');
        if(result && result.status === 200) dispatch(getEvents(result));
    }
}