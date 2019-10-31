import React from 'react';
import { AUTH_TOKEN } from '../../constants';

class Login extends React.Component {

    state = {
        login: true, // here, we can switch between Login and SignUp
        email: '',
        password: '',
        name: '',
    }

    render() {
        const { login, email, password, name } = this.state;

        return (
            <div>
                <h4 className="mv3">{login ? 'Login' : 'Sign Up'}</h4>
                <div className="flex flex-column">
                    {!login && (
                        <input
                            value={name}
                            onChange={e => this.setState({ name: e.target.value })}
                            type="text"
                            placeholder="name"
                        />
                    )}

                    <input
                        value={email}
                        onChange={e => this.setState({ email: e.target.value })}
                        type="text"
                        placeholder="email"
                    />

                    <input
                        value={password}
                        onChange={e => this.setState({ password: e.target.value })}
                        type="password"
                        placeholder="password"
                    />

                </div>
                <div className="flex mt3">

                    <div className="pointer mr2 button" onClick={() => this._confirm()}>
                        {login ? 'login' : 'create an account'}
                    </div>

                    <div className="pointer button" onClick={() => this.setState({ login: !login })}>
                        {login ? 'need to create an account?' : 'already have an account?'}
                    </div>
                </div>
            </div>
        )
    }

    _confirm = async () => {
        // todo
    }

    _saveUserData = token => {
        localStorage.setItem(AUTH_TOKEN, token);
    }
}

export default Login;