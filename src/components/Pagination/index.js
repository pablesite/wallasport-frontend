import { connect } from 'react-redux';

import Pagination from './Pagination';
import { pageForward, pageBack } from '../../store/actions';
import { actualPage, numberOfPages } from '../../store/selectors';


function mapStateToProps(state) {
  return {
    actualPage: actualPage(state),
    numberOfPages: numberOfPages(state),
  }
}

const mapDispatchToProps = {
  pageBack: pageBack,
  pageForward: pageForward,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Pagination);
