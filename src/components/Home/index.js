import { connect } from 'react-redux';

import Home from './Home';
 import { advertsInPages, actualPage, isFetching, error, showLogin, showRegister, showUserRegistered } from '../../store/selectors';


function mapStateToProps(state) {
  return {
    adverts: advertsInPages(state),
    actualPage: actualPage(state),

    isFetching: isFetching(state),
    error: error(state),

    showLogin: showLogin(state),
    showRegister: showRegister(state),
    showUserRegistered: showUserRegistered(state),

  }
}

const mapDispatchToProps = {
  // nothing for the moment

};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
