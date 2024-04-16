import './Auth.scss';
import { FormLogin, FormRegistration, FormRestore } from './components/Forms';
import { useState } from 'react';

function AuthPanel() {

    const [activeForm, setActiveForm] = useState('login');

    return (
        <div className="auth col-3 p-0">
            <div className="auth-header">
                <button 
                    className={`link ${ activeForm === 'login' ? 'active' : ''}`}
                    onClick={() => setActiveForm('login')}>
                    Login
                </button>
                <button 
                    className={`link ${ activeForm === 'registration' ? 'active' : ''}`}
                    onClick={() => setActiveForm('registration')}>
                    Registration
                </button>
            </div>
            <div className="auth-body">
                <div className={`auth-tab ${ activeForm === 'login' ? 'active' : ''}`}>
                    <FormLogin onSubmit={(data) => {
                        console.log(data);
                    }} />

                </div>
                <div className={`auth-tab ${ activeForm === 'registration' ? 'active' : ''}`}>
                    <FormRegistration onSubmit={(data) => {
                        console.log(data);
                    }} />
                </div>
                <div className={`auth-tab ${ activeForm === 'restore' ? 'active' : ''}`}>
                    <FormRestore onSubmit={(data) => {
                        console.log(data);
                    }} />
                </div>
            </div>
            <div className="auth-footer">
                <p>
                    <span>Forget your password ?</span>
                    <button 
                        className={`link-primary ${ activeForm === 'restore' ? 'active' : ''}`}
                        onClick={() => setActiveForm('restore')}>
                        Restore
                    </button>
                </p>
            </div>
        </div>
    );
}

export default AuthPanel;