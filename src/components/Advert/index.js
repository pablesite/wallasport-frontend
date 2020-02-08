// Listo
import { connect } from 'react-redux';

import Advert from './Advert';
// import { register, login, goApp, goLogin } from '../../store/actions';


function mapStateToProps(state) {
  return {
    // isFetching: state.ui.isFetching, 

  };
}

const mapDispatchToProps = {
//   login: login,

};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Advert);
