import { connect } from 'react-redux';
import UserDetail from './UserDetail';

import { showUpdateUserAction } from '../../store/actions';
import { user, isFetching, error, showUpdateUser  } from '../../store/selectors';


function mapStateToProps(state, props) {
  return {
    user: user(state),
    isFetching: isFetching(state),
    error: error(state),
    showUpdateUser: showUpdateUser(state),
  }
}

const mapDispatchToProps = {
  showUpdateUserAction: showUpdateUserAction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserDetail);
