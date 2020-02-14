import { connect } from 'react-redux';

import Home from './Home';
 import { AdvertsSuccess} from '../../store/actions';


function mapStateToProps(state) {
  return {
    adverts: state.adverts.advertsInPages,
    actualPage: state.adverts.actualPage,

    isFetching: state.ui.isFetching,
    error: state.ui.error,

    showLogin: state.homeModals.showLogin,
    showRegister: state.homeModals.showRegister,
    showUserRegistered: state.homeModals.showUserRegistered,

  }
}

const mapDispatchToProps = {
  // getAdverts: getAdverts,
  advertsSuccess: AdvertsSuccess,

};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
