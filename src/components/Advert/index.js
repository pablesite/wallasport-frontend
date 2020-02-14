// Listo
import { connect } from 'react-redux';

import Advert from './Advert';
 import { getOneAdvert, goToUpdateAdvert, deleteAdvert } from '../../store/actions';


function mapStateToProps(state) {
  
  return {
    // isFetching: state.ui.isFetching, 
    showAdvertDetail: state.homeModals.showAdvertDetail,
    user: state.user,
  };
}

const mapDispatchToProps = {
//   login: login,
goToDetail: getOneAdvert,
goToUpdateAdvert: goToUpdateAdvert,
deleteAdvert: deleteAdvert,

};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Advert);
