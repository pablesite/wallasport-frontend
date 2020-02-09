// Listo
import { connect } from 'react-redux';

import Advert from './Advert';
 import { getOneAdvert } from '../../store/actions';


function mapStateToProps(state) {
  
  return {
    // isFetching: state.ui.isFetching, 
    detail: state.adverts.detail
  };
}

const mapDispatchToProps = {
//   login: login,
goToDetail: getOneAdvert,

};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Advert);
