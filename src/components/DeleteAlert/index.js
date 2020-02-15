import { connect } from 'react-redux';
import DeleteAlert from './DeleteAlert';

import { deleteAdvert } from '../../store/actions';
import { token } from '../../store/selectors';


function mapStateToProps(state) {
  return {
    token: token(state),
  }
}

const mapDispatchToProps = {
    deleteAdvert: deleteAdvert
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DeleteAlert);
