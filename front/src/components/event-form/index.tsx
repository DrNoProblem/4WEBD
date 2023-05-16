import React, { FunctionComponent } from 'react';
import Event from '../../models/event';
import './style.css'

type Props = {
    request: Function
    event: Event
}

const EventForm: FunctionComponent<Props> = ({ request, event }) => {

    var newField: any = {
        name: event.name,
        picture: event.picture,
        cost: event.cost,
        locality: event.locality,
        date: event.date,
        maxPlace: event.maxPlace,
        dispoPlace: event.dispoPlace
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        newField = { ...newField, [e.target.name]: e.target.value };
        console.log(newField)
        console.log(event._id)
    }


    const initRequest = () => {
        const newEventPart: any = {
            id: event._id,
            name: newField.name,
            picture: newField.picture,
            cost: parseInt(newField.cost),
            locality: newField.locality,
            date: newField.date,
            maxPlace: parseInt(newField.maxPlace),
            dispoPlace: parseInt(newField.dispoPlace),
        }
        request(newEventPart)
    }


    return (
        <form className='edit-form flex-center flex-row g50 w100' onReset={() => newField = { name: event.name, picture: event.picture, cost: event.cost, locality: event.locality, date: event.date, maxPlace: event.maxPlace }}>

            <div className="edit-form__container flex-col g50 w35 relative flex-center">


                <div className="edit-form__container__types flex-col flex-center g50 flex-start-y flex-bet">
                    <div className="edit-form__container__types__colors flex-wrap g15">
                        <div className="edit-form__container__picture flex-row flex-center-x g5">
                            <label htmlFor="peau" className='edit-form__container__types__colors__color__info'>URL picture :</label>
                            <input id="picture" name="picture" type="text" className="" defaultValue={event.picture} onChange={e => handleInputChange(e)} />
                        </div>
                        <div className="edit-form__container__types__colors__color flex-row flex-center g5">
                            <label htmlFor="peau" className='edit-form__container__types__colors__color__info'>Name :</label>
                            <input id="name" name="name" type="text" className="" defaultValue={event.name} onChange={e => handleInputChange(e)} />
                        </div>
                        <div className="edit-form__container__types__colors__color flex-row flex-center g5">
                            <label htmlFor="habit2" className='edit-form__container__types__colors__color__info'>cost :</label>
                            <input id="cost" name="cost" type="text" className="" defaultValue={""+event.cost+""} onChange={e => handleInputChange(e)} />
                        </div>
                        <div className="edit-form__container__types__colors__color flex-row flex-center g5">
                            <label htmlFor="habit1" className='edit-form__container__types__colors__color__info'>locality :</label>
                            <input id="locality" name="locality" type="text" className="" defaultValue={event.locality} onChange={e => handleInputChange(e)} />
                        </div>
                        <div className="edit-form__container__types__colors__color flex-row flex-center g5">
                            <label htmlFor="cheveux" className='edit-form__container__types__colors__color__info'>date :</label>
                            <input id="date" name="date" type="text" className="" defaultValue={event.date} onChange={e => handleInputChange(e)} />
                        </div>
                        <div className="edit-form__container__types__colors__color flex-row flex-center g5">
                            <label htmlFor="habit3" className='edit-form__container__types__colors__color__info'>maxPlace :</label>
                            <input id="maxPlace" name="maxPlace" type="text" className="" defaultValue={""+event.maxPlace+""} onChange={e => handleInputChange(e)} />
                        </div>
                    </div>
                </div>
                <div className="flex-row g15 flex-bet relative">
                    <div className="cta w20 fs18" onClick={() => initRequest()}>
                        <span>
                            Valider
                        </span>
                    </div>
                    <button type="reset" className="cta cta-red w30 fs18">
                        <span>
                            reset
                        </span>
                    </button>
                </div>



            </div>
        </form >
    );
};

export default EventForm;