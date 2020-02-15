import { connect } from 'react-redux';
import AdvertDetail from './AdvertDetail';

import { getOneAdvert } from '../../store/actions';
import { isFetching, error, showLogin, showRegister, showUserRegistered, advertsInPages, locateAdvertFromUrl } from '../../store/selectors';


function mapStateToProps(state, props) {
  return {
    isFetching: isFetching(state),
    error: error(state),
    showLogin: showLogin(state),
    showRegister: showRegister(state),
    showUserRegistered: showUserRegistered(state),
    adverts: advertsInPages(state),
    locateAdvertFromUrl: locateAdvertFromUrl(props.location, state),
  }
}

const mapDispatchToProps = {
  getOneAdvert: getOneAdvert
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AdvertDetail);
