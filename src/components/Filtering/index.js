// Listo
import { connect } from 'react-redux';

import Filtering from './Filtering';

import { sort, tags } from '../../store/selectors';
import { getAdverts, switchSort } from '../../store/actions';


function mapStateToProps(state) {
  return {
    sort: sort(state),
    tagList: tags(state),
  };
}

const mapDispatchToProps = {
  filterAdverts: getAdverts,
  switchSort: switchSort,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filtering);

