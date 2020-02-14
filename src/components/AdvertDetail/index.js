import { connect } from 'react-redux';
import AdvertDetail from './AdvertDetail';

import { getOneAdvert } from '../../store/actions';
import { locateAdvertFromUrl } from '../../store/selectors';


function mapStateToProps(state, props) {
  return {
    adverts: state.adverts.advertsInPages,
    isFetching: state.ui.isFetching,
    error: state.ui.error,
    locateAdvertFromUrl: locateAdvertFromUrl(props.location, state.adverts),

    showLogin: state.homeModals.showLogin,
    showRegister: state.homeModals.showRegister,
    showUserRegistered: state.homeModals.showUserRegistered,
    
  }
}

const mapDispatchToProps = {
  getOneAdvert: getOneAdvert
};


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AdvertDetail);
