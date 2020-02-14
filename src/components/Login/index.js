// Listo
import { connect } from 'react-redux';

import Login from './Login';
import { register, login, goApp, goLogin, goHome } from '../../store/actions';


function mapStateToProps(state, props) {

  return {
    isFetching: state.ui.isFetching, 
    error: state.ui.error,
    showLogin: state.homeModals.showLogin,
    showRegister: state.homeModals.showRegister,
    showUserRegistered: state.homeModals.showUserRegistered,
    location: props.location,
  };
}

const mapDispatchToProps = {
  login: login,
  register: register,
  goApp: goApp,
  goLogin: goLogin,
  goHome: goHome,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

