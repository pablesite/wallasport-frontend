import { connect } from 'react-redux';
import DeleteAlert from './DeleteAlert';

import { deleteAdvert } from '../../store/actions';



function mapStateToProps(state, props) {
  return {
    // adverts: state.adverts.advertsInPages,
    isFetching: state.ui.isFetching,
    error: state.ui.error,
    // locateAdvertFromUrl: locateAdvertFromUrl(props.location, state.adverts),

    // showLogin: state.homeModals.showLogin,
    // showRegister: state.homeModals.showRegister,
    // showUserRegistered: state.homeModals.showUserRegistered,

    token: state.user.token,
    
  }
}

const mapDispatchToProps = {
    deleteAdvert: deleteAdvert
};


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DeleteAlert);
