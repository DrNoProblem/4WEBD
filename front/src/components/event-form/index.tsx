import React, { FunctionComponent } from 'react';
import './style.css'

type Props = {
    request: Function
}

const EventForm: FunctionComponent<Props> = ({ request }) => {

    var objectField: any = { coiffe: '', cape: '', bouclier: '', costume: '', familier: '' }
    var colorField: any = { peau: '', cheveux: '', habit1: '', habit2: '', habit3: '' }
    var valuePicture: string = ""
    var valueClasse: string = ""

    const classList: string[] = [
        'Zobal', 'Iop', 'Sram', 'Ouginak', 'Eniripsa', 'Steamer',
        'Enutrof', 'Cra', 'Roublard', 'Sacrieur', 'Eliotrope',
        'Xelor', 'Pandawa', 'Feca', 'Forgelance', 'Osamodas',
        'Sadida', 'Ecaflip'
    ];

    const handleInputChangeColor = (e: React.ChangeEvent<HTMLInputElement>) => {
        colorField = { ...colorField, [e.target.name]: e.target.value };
    }

    const handleInputChangeObject = (e: React.ChangeEvent<HTMLInputElement>) => {
        objectField = { ...objectField, [e.target.name]: e.target.value };
    }

    const handleInputChangeURL = (e: React.ChangeEvent<HTMLInputElement>) => {
        valuePicture = e.target.value
    }
    const handleInputChangeClasse = (e: React.ChangeEvent<HTMLSelectElement>) => {
        valueClasse = e.target.value
    }


    const handleInputReset = (e: React.FormEvent<HTMLFormElement>) => {
        colorField = { peau: '', cheveux: '', habit1: '', habit2: '', habit3: '' };
        objectField = { coiffe: '', cape: '', bouclier: '', costume: '', familier: '' };

    }

    const initRequest = () => {
        const newEventPart: any = {
            classe: valueClasse,
            picture: valuePicture,
            color: [colorField.peau, colorField.cheveux, colorField.habit1, colorField.habit2, colorField.habit3],
            object: [objectField.bouclier, objectField.cape, objectField.coiffe, objectField.costume, objectField.familier]
        }
        console.log(newEventPart);
        request(newEventPart)
    }


    return (
        <form className='edit-form flex-center flex-row flex-center g50 w100' onReset={e => handleInputReset(e)}>

            <div className="edit-form__container flex-col g50 w35 relative">

                <div className="edit-form__container__classes flex-col g15">
                    <h3 className='edit-form__container__classes__title m0 pl25' >Choose a class :</h3>
                    <select id="classe-select" onChange={e => handleInputChangeClasse(e)}>
                        {classList.map(classe => (
                            <option value={classe} key={classe}>{classe}</option>
                        ))}
                    </select>
                </div>

                <div className="edit-form__container__picture flex-col g5">
                    <h3 className='edit-form__container__picture__title m0 pl25' >URL picture :</h3>
                    <input id="picture" name="picture" type="text" className="" onChange={e => handleInputChangeURL(e)} />
                </div>

                <div className="edit-form__container__types flex-row flex-center g50 flex-start-y flex-bet">
                    <div className="edit-form__container__types__colors flex-col g15">
                        <h3 className='edit-form__container__types__colors__title m0 pl25' >Colors :</h3>
                        <div className="edit-form__container__types__colors__color flex-row flex-center g5">
                            <label htmlFor="peau" className='edit-form__container__types__colors__color__info'>Peau :</label>
                            <input id="peau" name="peau" type="text" className="" onChange={e => handleInputChangeColor(e)} />
                        </div>
                        <div className="edit-form__container__types__colors__color flex-row flex-center g5">
                            <label htmlFor="cheveux" className='edit-form__container__types__colors__color__info'>Cheveux :</label>
                            <input id="cheveux" name="cheveux" type="text" className="" onChange={e => handleInputChangeColor(e)} />
                        </div>
                        <div className="edit-form__container__types__colors__color flex-row flex-center g5">
                            <label htmlFor="habit1" className='edit-form__container__types__colors__color__info'>Habit 1 :</label>
                            <input id="habit1" name="habit1" type="text" className="" onChange={e => handleInputChangeColor(e)} />
                        </div>
                        <div className="edit-form__container__types__colors__color flex-row flex-center g5">
                            <label htmlFor="habit2" className='edit-form__container__types__colors__color__info'>Habit 2 :</label>
                            <input id="habit2" name="habit2" type="text" className="" onChange={e => handleInputChangeColor(e)} />
                        </div>
                        <div className="edit-form__container__types__colors__color flex-row flex-center g5">
                            <label htmlFor="habit3" className='edit-form__container__types__colors__color__info'>Habit 3 :</label>
                            <input id="habit3" name="habit3" type="text" className="" onChange={e => handleInputChangeColor(e)} />
                        </div>
                    </div>
                    <div className="edit-form__container__types__equips flex-col g15">
                        <h3 className='edit-form__container__types__equips__title m0 pl25' >Objects :</h3>
                        <div className="edit-form__container__types__equips__equip flex-row flex-center g5">
                            <label htmlFor="coiffe" className="edit-form__container__types__equips__equip__info">coiffe :</label>
                            <input id="coiffe" name='coiffe' type="text" className="" onChange={e => handleInputChangeObject(e)} />
                        </div>
                        <div className="edit-form__container__types__equips__equip flex-row flex-center g5">
                            <label htmlFor="cape" className="edit-form__container__types__equips__equip__info">cape :</label>
                            <input id="cape" name='cape' type="text" className="" onChange={e => handleInputChangeObject(e)} />
                        </div>
                        <div className="edit-form__container__types__equips__equip flex-row flex-center g5">
                            <label htmlFor="bouclier" className="edit-form__container__types__equips__equip__info">bouclier :</label>
                            <input id="bouclier" name='bouclier' type="text" className="" onChange={e => handleInputChangeObject(e)} />
                        </div>
                        <div className="edit-form__container__types__equips__equip flex-row flex-center g5">
                            <label htmlFor="costume" className="edit-form__container__types__equips__equip__info">costume :</label>
                            <input id="costume" name='costume' type="text" className="" onChange={e => handleInputChangeObject(e)} />
                        </div>
                        <div className="edit-form__container__types__equips__equip flex-row flex-center g5">
                            <label htmlFor="familier" className="edit-form__container__types__equips__equip__info">familier :</label>
                            <input id="familier" name='familier' type="text" className="" onChange={e => handleInputChangeObject(e)} />
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