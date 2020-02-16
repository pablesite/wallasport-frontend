import { connect } from 'react-redux';

import Home from './Home';
 import { advertsInPages, actualPage, isFetching, error, showLogin, showRegister, showUserRegistered } from '../../store/selectors';
 import { showListAction } from '../../store/actions';


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
  showListAction: showListAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
