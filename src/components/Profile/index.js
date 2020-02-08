import { connect } from 'react-redux';

import Profile from './Profile';
import { logout, goLogin, goRegister } from '../../store/actions';


function mapStateToProps(state) {
  return {
    user: state.user
  };
}

const mapDispatchToProps = {
  logout: logout,
  goLogin: goLogin,
  goRegister: goRegister,
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
