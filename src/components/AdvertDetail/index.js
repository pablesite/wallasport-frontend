import { connect } from 'react-redux';
import AdvertDetail from './AdvertDetail';

import { getOneAdvert } from '../../store/actions';
import { isAuthorized } from '../../store/selectors';


const mapDispatchToProps = {
  getOneAdvert: getOneAdvert

};

function mapStateToProps(state) {
  return {
    adverts: state.adverts,
    user: state.user,
    isFetching: state.ui.isFetching,
    error: state.ui.error,
    checkUser: isAuthorized(state.user),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AdvertDetail);
