// Listo
import { connect } from 'react-redux';

import Login from './Login';
import { register, login, goToHome, goLogin } from '../../store/actions';
import {isFetching, error, showLogin, showRegister, showUserRegistered } from '../../store/selectors';


function mapStateToProps(state) {

  return {
    isFetching: isFetching(state), 
    error: error(state),
    showLogin: showLogin(state),
    showRegister: showRegister(state),
    showUserRegistered: showUserRegistered(state),
  };
}

const mapDispatchToProps = {
  login: login,
  register: register,
  goToHome: goToHome,
  goLogin: goLogin,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

