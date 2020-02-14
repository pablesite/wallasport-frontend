// Listo
import { connect } from 'react-redux';

import Filtering from './Filtering';
import { register, login, goApp, goLogin, goToHome, getAdverts } from '../../store/actions';


function mapStateToProps(state, props) {

  return {
    // isFetching: state.ui.isFetching, 
    // error: state.ui.error,
    // showLogin: state.homeModals.showLogin,
    // showRegister: state.homeModals.showRegister,
    // showUserRegistered: state.homeModals.showUserRegistered,
    // location: props.location,
  };
}

const mapDispatchToProps = {
  // login: login,
  // register: register,
  // goApp: goApp,
  // goLogin: goLogin,
  // goToHome: goToHome,
  filterAdverts: getAdverts,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filtering);

