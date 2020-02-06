import { connect } from 'react-redux';

import Home from './Home';
import { getAdverts, goLogin, goRegister } from '../../store/actions';


function mapStateToProps(state) {
  return {
    adverts: state.adverts,
    user: state.user,
    isFetching: state.ui.isFetching,
    error: state.ui.error,
    tagList: state.tags,
    showLogin: state.homeModals.showLogin,
    showRegister: state.homeModals.showRegister,

  }
}

const mapDispatchToProps = {
  loadAdverts: getAdverts,
  goLogin: goLogin,
  goRegister: goRegister,

};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
