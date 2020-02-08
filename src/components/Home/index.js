import { connect } from 'react-redux';

import Home from './Home';
import { getAdverts, divideInPages} from '../../store/actions';


function mapStateToProps(state) {
  return {
    adverts: state.adverts.advertsInPages,
    actualPage: state.adverts.actualPage,
    user: state.user,
    isFetching: state.ui.isFetching,
    error: state.ui.error,
    tagList: state.tags,
    showLogin: state.homeModals.showLogin,
    showRegister: state.homeModals.showRegister,
    showUserRegistered: state.homeModals.showUserRegistered,

  }
}

const mapDispatchToProps = {
  loadAdverts: getAdverts,

};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
