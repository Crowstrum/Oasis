import React from 'react';
import PropTypes from 'prop-types';
import AuthService from '../../Utility/Auth';
import { loginRequest, loginSuccess, logoutSuccess } from '../../Actions/auth/index';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


const Login = ({ authService, auth, history, logoutSuccess, loginRequest }) => {
    return (
        <div>
            {auth.isAuthenticated ?
                <div>
                    <img src={auth.profile.picture} height="40px" alt="profile" />
                    <span>Welcome, {auth.profile.nickname}</span>
                    <button
                        onClick={() => {
                            logoutSuccess();
                            AuthService.logout(); // careful, this is a static method
                            history.push('/');
                        }}
                    >
                        Logout
                    </button>
                </div>
                :
                <button
                    onClick={() => {
                        authService.login();
                        loginRequest();
                    }}
                >
                    Login
                </button>
            }
            {auth.error &&
                <p>{auth.error}</p>
            }
        </div>
    );
};

Login.propTypes = {
    authService: PropTypes.object.isRequired, // eslint-disable-line
    history: PropTypes.shape({
        push: PropTypes.func.isRequired,
    }),
    auth: PropTypes.shape({
        isAuthenticated: PropTypes.bool.isRequired,
        profile: PropTypes.object,
        error: PropTypes.string,
    }),
    loginRequest: PropTypes.func,
    logoutSuccess: PropTypes.func,
};

const mapStateToProps = state => ({
    auth: state.authReducer,
});

const mapDispatchToProps = dispatch => ({
    loginRequest: () => dispatch(loginRequest()),
    logoutSuccess: () => dispatch(logoutSuccess()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));