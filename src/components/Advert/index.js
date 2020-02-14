// Listo
import { connect } from 'react-redux';

import Advert from './Advert';
 import { getOneAdvert, goUpdateAdvert, deleteAdvert } from '../../store/actions';


function mapStateToProps(state) {
  
  return {
    // isFetching: state.ui.isFetching, 
    detail: state.adverts.detail,
    user: state.user,
  };
}

const mapDispatchToProps = {
//   login: login,
goToDetail: getOneAdvert,
goUpdateAdvert: goUpdateAdvert,
deleteAdvert: deleteAdvert,

};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Advert);
