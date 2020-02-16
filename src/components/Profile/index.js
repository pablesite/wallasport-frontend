import { connect } from 'react-redux';

import Profile from './Profile';

import { user } from '../../store/selectors';
import { logout, showLoginAction, showRegisterAction, getAdverts, goToHome, goToUserDetail, goToCreateAdvert } from '../../store/actions';


function mapStateToProps(state) {
  return {
    user: user(state),
  };
}

const mapDispatchToProps = {
  showLoginAction: showLoginAction,
  logout: logout,
  showRegisterAction: showRegisterAction,
  getAdverts: getAdverts,
  goToHome: goToHome,
  goToUserDetail: goToUserDetail,
  goToCreateAdvert: goToCreateAdvert,
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
