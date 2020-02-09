import { connect } from 'react-redux';

import Pagination from './Pagination';
 import { pageForward, pageBack} from '../../store/actions';


function mapStateToProps(state) {
  return {
    actualPage: state.adverts.actualPage,
    numberOfPages: state.adverts.numberOfPages,
 
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
