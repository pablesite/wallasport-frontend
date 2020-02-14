import { connect } from 'react-redux';

import PrivateRoute from './PrivateRoute';
import { isAuthorized } from '../../store/selectors';
import { goLogin } from '../../store/actions';

const mapStateToProps = state => ({
  authorized: isAuthorized(state.user), //quitar lo de exist de aquí cuando vaya limpiando todos los registros
});

const mapDispatchToProps = {
  goLogin: goLogin,
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PrivateRoute);
