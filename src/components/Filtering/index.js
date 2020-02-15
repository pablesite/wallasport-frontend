// Listo
import { connect } from 'react-redux';

import Filtering from './Filtering';
import { getAdverts } from '../../store/actions';


function mapStateToProps(state, props) {
  return {
    // nothing for the moment
  };
}

const mapDispatchToProps = {
  filterAdverts: getAdverts,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filtering);

