import React, { FunctionComponent, useState } from "react";
import openUserSign from "../../helpers/display-user";
import './style.css';
import logIn from "../../api-request/user/log-in";
import Cookies from "js-cookie"
import register from "../../api-request/user/register";

type Props = {
    testmaxleroux: Function
};

const UserHeader: FunctionComponent<Props> = ({testmaxleroux}) => {


    const [log, setLog] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const checkStatus = (string: string) => {
        if (string.includes('checkinfo')) {
            if (true) {
                setLog(true);
                openUserSign('close')
            }
            else {
                document.querySelector('.user-window__bloc__' + string.substr(-2))!.classList.add("error")
            }
        }
        else {
            openUserSign(string)
        }
    }



    const signIn = () => {
        logIn(email, password).then((result) => {
            if (result) {
                openUserSign('close');
                console.log(result[0].token);
                Cookies.set('token', result[0].token, { expires: 30 });
                testmaxleroux();
            } else {
                document.querySelector('.user-window__bloc__in')!.classList.add("error");
            }
        })
    };

    var objectFieldSignUp:any = { "email": "", "pseudo": "", "password": "", "validpassword": ""};
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, type:string) => {
        objectFieldSignUp = { ...objectFieldSignUp, [type]: e.target.value };
    }

    const checkinfo = (objectFieldSignUp:any) => {
        console.log(objectFieldSignUp);
        if (objectFieldSignUp.password === objectFieldSignUp.validpassword) { 
            register(objectFieldSignUp.email, objectFieldSignUp.pseudo, objectFieldSignUp.password, "user").then(result => {
                console.log(result);
                Cookies.set('token', result[0].token, { expires: 30 });
                openUserSign('close');
                testmaxleroux()
            })
        }
    }


    testmaxleroux()

    return (
        <div className='user-window absolute r5 t10 w80-tab p20 flex-center flex-col zi9'>
            {!log ? (
                <div className='user-window__head flex-row w80 flex-around'>
                    <h2 className='user-window__head__in-title' onClick={() => checkStatus("in")}>Sign In</h2>
                    <h2 className='user-window__head__up-title' onClick={() => checkStatus("up")}>Sign Up</h2>
                </div>
            ) : (
                <div>ok</div>
            )}
            <div className="user-window__close absolute t5 r5" onClick={() => checkStatus("close")}></div>

            <div className="user-window__bloc flex-start-x flex-row">

                <div className="user-window__bloc__in flex-col g15 flex-center w100">
                    <div className='user-window__bloc__in__form flex-col flex-center-y flex-start-x w80'>
                        <p className='user-window__bloc__in__form__title b10'>Email</p>
                        <input className='user-window__bloc__in__form__input w100' type="text" onChange={(e) => setEmail(e.target.value)}/>
                        <p className='user-window__bloc__in__form__title b10'>Password</p>
                        <input className='user-window__bloc__in__form__input w100' type="password" onChange={(e) => setPassword(e.target.value)}/>
                    </div>

                    <div className='user-window__bloc__in__button flex-col flex-center-y flex-start-x mb15 mt15'>
                        <div className='cta' onClick={() => signIn()}>
                            <span>
                                Sign In
                            </span>
                        </div>
                    </div>
                </div>

                <div className="user-window__bloc__up flex-col g15 flex-center w100">
                    <div className='user-window__bloc__up__form flex-col flex-center-y flex-start-x w80'>
                        <p className='user-window__bloc__up__form__title b10'>Pseudo</p>
                        <input className='user-window__bloc__up__form__input w100' type="text" onChange={(e) => handleInputChange(e,"pseudo")}/>
                        <p className='user-window__bloc__up__form__title b10'>Email</p>
                        <input className='user-window__bloc__up__form__input w100' type="text" onChange={(e) => handleInputChange(e,"email")}/>
                        <p className='user-window__bloc__up__form__title b10'>Password</p>
                        <input className='user-window__bloc__up__form__input w100' type="password" onChange={(e) => handleInputChange(e,"password")}/>
                        <p className='user-window__bloc__up__form__title b10'>Confirm password</p>
                        <input className='user-window__bloc__up__form__input w100' type="password" onChange={(e) => handleInputChange(e,"validpassword")}/>
                    </div>

                    <div className='user-window__bloc__in__button flex-col flex-center-y flex-start-x mb15 mt15'>
                        <div className='cta' onClick={() => checkinfo(objectFieldSignUp)}>
                            <span>
                                Sign Up
                            </span>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}
export default UserHeader;