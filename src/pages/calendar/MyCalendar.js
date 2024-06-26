import "../../css/custom-calendar.css";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { callEventsAPI } from "../../apis/CalendarAPICalls";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import koLocale from '@fullcalendar/core/locales/ko'; // 한국어 로케일 추가

function MyCalendar(){
    const dispatch = useDispatch();
    const {events} = useSelector(state => ({
        events: state.calendarReducer.events
    }));

    useEffect(() => {
        dispatch(callEventsAPI());
    },[dispatch])

    const formattedEvents = events.map(event => ({
        id: event.id,
        title: event.title,
        start: event.startDate,
        end: event.endDate,
        allDay: event.allDay
    }));

    console.log("events",events);
    console.log("events", formattedEvents);

    return(
        <div className="ly_cont">
            <h4 className="el_lv1Head hp_mb30">캘린더</h4>
            <section className="bl_sect" style={{ height: 'calc(100% - 30px - 42px)' }}>
            <FullCalendar
                    plugins={[dayGridPlugin, interactionPlugin]}
                    initialView="dayGridMonth"
                    locale={koLocale}
                    events={formattedEvents} // API로 가져온 이벤트 데이터 설정
                    headerToolbar={{
                        left: 'prev,next today',
                        center: 'title',
                        right: 'dayGridMonth,dayGridWeek,dayGridDay'
                    }}
                    editable={true}
                    selectable={true}
                />
            </section>
        </div>
    )
}
export default MyCalendar;