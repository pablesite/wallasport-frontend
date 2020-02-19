import { connect } from 'react-redux';

import PrivateRoute from './PrivateRoute';

import { isAuthorized } from '../../store/selectors';
import { showLoginAction } from '../../store/actions';

const mapStateToProps = state => ({
  authorized: isAuthorized(state), 
});

const mapDispatchToProps = {
  showLoginAction: showLoginAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PrivateRoute);
