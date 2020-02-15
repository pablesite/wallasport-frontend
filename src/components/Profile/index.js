import { connect } from 'react-redux';

import Profile from './Profile';

import { user } from '../../store/selectors';
import { logout, goLogin, goRegister,getAdverts, goToCreateAdvert } from '../../store/actions';


function mapStateToProps(state) {
  return {
    user: user(state),
  };
}

const mapDispatchToProps = {
  goLogin: goLogin,
  logout: logout,
  goRegister: goRegister,
  getAdverts: getAdverts,
  goToCreateAdvert: goToCreateAdvert,
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
