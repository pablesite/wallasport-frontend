// Listo
import { connect } from 'react-redux';

import Login from './Login';
import { register, login, goApp } from '../../store/actions';


function mapStateToProps(state) {
  return {
    isFetching: state.ui.isFetching, 
    error: state.ui.error,
    showLogin: state.homeModals.showLogin,
    showRegister: state.homeModals.showRegister,
  };
}

const mapDispatchToProps = {
  login: login,
  register: register,
  goApp: goApp,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
