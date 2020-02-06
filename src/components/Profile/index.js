import { connect } from 'react-redux';

import Profile from './Profile';
import { logout } from '../../store/actions' 


function mapStateToProps(state) {
  return {

  };
}

const mapDispatchToProps = {
    logout: logout
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
