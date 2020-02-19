import { connect } from 'react-redux';
import DeleteAlert from './DeleteAlert';

import { deleteUser, deleteAdvert } from '../../store/actions';
import { token } from '../../store/selectors';


function mapStateToProps(state) {
  return {
    token: token(state),
  }
}

const mapDispatchToProps = {
    deleteAdvert: deleteAdvert,
    deleteUser: deleteUser,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DeleteAlert);
