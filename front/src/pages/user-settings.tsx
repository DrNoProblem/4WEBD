import React, { FunctionComponent, useEffect, useState } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import User from '../models/user';


interface Props extends RouteComponentProps<{ id: string }> {
    usercalled: User,
    requestUpdate: Function,
    requestDelete: Function
}

const UserSettings: FunctionComponent<Props> = ({ match, usercalled, requestUpdate, requestDelete }) => {

    const [EditPseudo, setEditPseudo] = useState(true);
    const [EditMail, setEditMail] = useState(true);
    const [EditPassWord, setEditPassWord] = useState(true);
    const [EditDelete, setEditDelete] = useState(true);

    const [user, setUser] = useState<User>(usercalled);

    useEffect(() => {
        setUser(user)
    }, [match.params.id, usercalled])

    var fieldToSend: Array<string> = []

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, type: string) => {
        fieldToSend = [type, e.target.value];
    }


    var fieldToSendPsw: any = {'password': "", 'newpassword': ""}
    const handleInputChangePassword = (e: React.ChangeEvent<HTMLInputElement>, type: string) => {
        fieldToSendPsw = { ...fieldToSendPsw, [type]: e.target.value };
    }
    const checkPassord = (checkfield: any) => {
        if (checkfield.password === checkfield.newpassword) {
            update(["password", checkfield.password])
        }
        else {
            console.log("pws !==")
        }
    }

    const update = (Field: Array<string>) => {
        console.log(Field[0])
        console.log(Field[1])
        requestUpdate(Field[0], Field[1])
    }


    const deleteUser = () => {
        requestDelete("me")
    }


    return (
        <div className='user-settings pl50'>

            <div className='relative mt50'>
                <Link to={`/user-profile/${match.params.id}`} className="cta">
                    <span>
                        Back to Profile
                    </span>
                </Link>
            </div>

            <div className="user-settings__container w30 mlrauto relative zi9">
                <div className="user-settings__container__content flex-col g15">
                    <div className="user-settings__container__content__pseudo">
                        {EditPseudo ? (
                            <div className="user-settings__container__content__pseudo__title p25" onClick={() => { setEditPseudo(false); setEditMail(true); setEditPassWord(true); setEditDelete(true) }}>
                                <h2 className='bold blue m0 ml15 flex-bet flex-bet'>Pseudo :
                                    <i className='material-icons ml10 blue'>edit</i>
                                </h2>
                                <p className='m0 mt15'>{user.pseudo}</p>
                            </div>
                        ) : (
                            <div className="user-settings__container__content__pseudo__editing p25 flex-col g10">
                                <h2 className='bold blue m0 ml15 flex-bet'>New pseudo :
                                    <i className='material-icons ml10' onClick={() => setEditPseudo(true)}>close</i>
                                </h2>
                                <input type="text" placeholder={user.pseudo} onChange={e => handleInputChange(e, 'pseudo')} />
                                <div className='mt10 ml10'>
                                    <div className="cta" onClick={() => update(fieldToSend)}>
                                        <span>
                                            Save
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="user-settings__container__content__mail">
                        {EditMail ? (
                            <div className="user-settings__container__content__mail__title p25" onClick={() => { setEditPseudo(true); setEditMail(false); setEditPassWord(true); setEditDelete(true) }}>
                                <h2 className='bold blue m0 ml15 flex-bet'>Email :
                                    <i className='material-icons ml10 blue'>edit</i>
                                </h2>
                                <p className='m0 mt15'>{user.email}</p>
                            </div>
                        ) : (
                            <div className="user-settings__container__content__mail__editing p25 flex-col g10">
                                <h2 className='bold blue m0 ml15 flex-bet'>New email :
                                    <i className='material-icons ml10' onClick={() => setEditMail(true)}>close</i>
                                </h2>
                                <input type="text" placeholder={user.email} onChange={e => handleInputChange(e, 'email')} />
                                <div className='mt10 ml10'>
                                    <div className="cta" onClick={() => update(fieldToSend)}>
                                        <span>
                                            Save
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="user-settings__container__content__password">
                        {EditPassWord ? (
                            <div className="user-settings__container__content__password__title p25" onClick={() => { setEditPseudo(true); setEditMail(true); setEditPassWord(false); setEditDelete(true) }}>
                                <h2 className='bold blue m0 ml15 flex-bet'>Password :
                                    <i className='material-icons ml10 blue'>edit</i>
                                </h2>
                                <p className='m0 mt15'>************</p>
                            </div>
                        ) : (
                            <div className="user-settings__container__content__password__editing p25 flex-col g10">
                                <h2 className='bold blue m0 ml15 flex-bet mb10'>New password :
                                    <i className='material-icons ml10' onClick={() => setEditPassWord(true)}>close</i>
                                </h2>
                                <input type="password" onChange={e => handleInputChangePassword(e, 'password')} />
                                <h2 className='bold blue ml15 mb10'>Confirm new password :</h2>
                                <input type="password" onChange={e => handleInputChangePassword(e, 'newpassword')} />
                                <div className='mt10 ml10'>
                                    <div className="cta" onClick={() => checkPassord(fieldToSendPsw)}>
                                        <span>
                                            Save
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="user-settings__container__content__delete">

                        {EditDelete ? (
                            <div className="user-settings__container__content__delete__title p25" onClick={() => { setEditPseudo(true); setEditMail(true); setEditPassWord(true); setEditDelete(false) }}>
                                <h2 className='bold red m0 ml15 flex-bet'>Delete :
                                    <i className='material-icons ml10 red' >delete</i>
                                </h2>
                            </div>
                        ) : (

                            <div className="user-settings__container__content__delete__editing p25">
                                <h2 className='bold red m0 ml15 flex-bet'>Delete :
                                    <i className='material-icons ml10' onClick={() => { setEditDelete(true) }}>close</i>
                                </h2>
                                <div className='mt10 ml10'>
                                    <div className="cta cta-red" onClick={() => { deleteUser() }}>
                                        <span>
                                            Delete
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

        </div>


    );
}

export default UserSettings;