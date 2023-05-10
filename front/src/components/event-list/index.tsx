import React, { FunctionComponent, useState, useEffect } from 'react';
import Event from '../../models/event';
import EventCard from '../event-card';
import { Link } from 'react-router-dom';
import './style.css'
import User from '../../models/user';

type Props = {
    EventsIn: Array<Event>
    DomClass: String
    clickcard: Function
    clickfav: Function
    CurrentUser : User
};

const eventsListInput: FunctionComponent<Props> = ({ EventsIn, DomClass, clickcard, clickfav, CurrentUser}) => {



    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [events, setEvents] = useState(EventsIn);


    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        setEvents(EventsIn);
    }, [EventsIn]);

    const handleKeyDown = (event: { key: string; }) => {
        if (event.key === 'Enter') {
            prefilter();
        }
    }

    const filter = (classe: string, item: string) => {
        var filteredEvents = EventsIn
        if (classe !== '') {
            if (classe === 'all') {
                setEvents(EventsIn);
            }
            else {
                filteredEvents = filteredEvents.filter(event => event.classe === classe);
                setEvents(filteredEvents);
            }
        }
        if (item !== '') {
            filteredEvents = filteredEvents.filter(event => event.object.includes(item) || event.classe === (item));
            setEvents(filteredEvents);
        }
        checkfilter(filteredEvents)
    }


    const checkfilter = (filteredEvents: object) => {
        if (EventsIn !== filteredEvents) {
            document.querySelector('.' + DomClass +' .event-list__search__reset')!.classList.remove('hide')
        }
        else {
            document.querySelector('.' + DomClass +' .event-list__search__reset')!.classList.add('hide')
        }
    }

    const prefilter = () => {

        var classe = 'all'
        var item = ''
        if (document.querySelector('.' + DomClass +' .active-filter')) {
            classe = document.querySelector('.' + DomClass +' .active-filter')!.id.slice(7);
        }
        if ((document.querySelector('.' + DomClass +' .event-list__search__option__bar') as HTMLInputElement).value !== '') {
            item = (document.querySelector('.' + DomClass +' .event-list__search__option__bar') as HTMLInputElement).value;
        }
        filter(classe, item)
    }


    const classesFilter = (classe: string) => {
        const test = document.querySelector('#filter-' + classe +'.' + DomClass);
        if (test!.classList.value.includes('active-filter')) {
            test!.classList.toggle('active-filter');
            prefilter();
        } else {
            if (document.querySelector('.' + DomClass +' .active-filter')) {
                document.querySelector('.' + DomClass +' .active-filter')!.classList.remove('active-filter')
            }
            test!.classList.toggle('active-filter');
            prefilter();
        }
    }

    const resetfilter = () => {
        if (document.querySelector('.' + DomClass +' .active-filter')) {
            document.querySelector('.' + DomClass +' .active-filter')!.classList.remove('active-filter');
        }
        (document.querySelector('.' + DomClass +' .event-list__search__option__bar') as HTMLInputElement).value = '';
        filter('all', '')
        document.querySelector('.' + DomClass +' .event-list__search__reset')!.classList.add('hide')

    }

    const classList: string[] = [];

    EventsIn.forEach(element => {
        if (!classList.includes(element.classe)) {
            classList.push(element.classe)
        }
    });

    return (


        // eslint-disable-next-line no-useless-concat
        <div className={'event-list flex-center-x flex-col pl50 pr50 ' + DomClass} >
            <div className='event-list__search w75 pt50 flex-col'>

                <div className='event-list__search__option flex-row g10 flex-center pl50 mb20 pr50'>
                    <input id='search-bar' type='text' className='event-list__search__option__bar w100 fs16' placeholder='Search user, classes, item ...' onKeyDown={handleKeyDown} />
                    <div className='event-list__search__option__button flex-center'>
                        <i className='material-icons' onClick={() => prefilter()}>search</i>
                    </div>
                </div>
                <div className='event-list__classes-filter flex-wrap pl50 pr50 none-tab'>
                    {classList.map(classe => (
                        <div key={classe} id={'filter-' + classe} className={DomClass + ' event-list__classes-filter__classe p10 pl15 pr15 fs16 mr15 mb5'} onClick={() => classesFilter(classe)}>{classe}</div>
                    ))}
                </div>

                <div className='event-list__search__reset mt20 ml50 hide'>
                    <div className='cta' onClick={() => resetfilter()}>
                        <span>
                            reset filters
                        </span>
                    </div>
                </div>
            </div>


            <ul className='event-list__container flex-wrap w100-tab w80 g15 pb50 flex-center'>
                {events.map(event => (
                    <EventCard 
                    key={event._id} 
                    event={event} 
                    CurrentUser={CurrentUser} 
                    clickcard={clickcard}
                    clickfav={clickfav}
                    />
                ))}
                <li className='card-event__create flex-row flex-center-y relative'>
                    <Link to='/events/add'>
                        <img className='card-event__create__item' src='https://media.discordapp.net/attachments/967347575390863360/1097519818581737542/image.png' alt='event'></img>
                    </Link>
                </li>
            </ul>


        </div>
    );
}

export default eventsListInput;