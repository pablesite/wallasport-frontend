import { connect } from 'react-redux';

import PrivateRoute from './PrivateRoute';
import { isAuthorized } from '../../store/selectors';

const mapStateToProps = state => ({
  authorized: isAuthorized(state.user).exist, //quitar lo de exist de aquí cuando vaya limpiando todos los registros
});

export default connect(mapStateToProps)(PrivateRoute);
