import { connect } from 'react-redux';

import Footer from './Footer';
import { logout, goLogin, goRegister } from '../../store/actions';


function mapStateToProps(state) {
  return {
    // user: state.user
  };
}

const mapDispatchToProps = {
//   logout: logout,
//   goLogin: goLogin,
//   goRegister: goRegister,
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer);
