import { connect } from 'react-redux';

import PrivateRoute from './PrivateRoute';

import { isAuthorized } from '../../store/selectors';
import { goToHome } from '../../store/actions';

const mapStateToProps = state => ({
  authorized: isAuthorized(state), 
});

const mapDispatchToProps = {
  goToHome: goToHome,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PrivateRoute);
