// Listo
import { connect } from 'react-redux';

import Login from './Login';
import { register, login, updateUser, goToHome, showLoginAction } from '../../store/actions';
import {token, username, email, isFetching, error, showLogin, showRegister, showUpdateUser, showUserRegistered } from '../../store/selectors';


function mapStateToProps(state) {

  return {
    token: token(state),
    username: username(state),
    email: email(state),
    isFetching: isFetching(state), 
    error: error(state),
    showLogin: showLogin(state),
    showRegister: showRegister(state),
    showUpdateUser: showUpdateUser(state),
    showUserRegistered: showUserRegistered(state),
  };
}

const mapDispatchToProps = {
  login: login, 
  register: register,
  updateUser: updateUser,
  goToHome: goToHome,
  showLoginAction: showLoginAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

