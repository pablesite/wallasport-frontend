import { connect } from 'react-redux';
import AdvertDetail from './AdvertDetail';

import { getOneAdvert } from '../../store/actions';
import { isAuthorized, locateAdvertFromUrl } from '../../store/selectors';


function mapStateToProps(state, props) {
  return {
    advertsState: state,
    adverts: state.adverts.advertsInPages,
    actualPage: state.adverts.actualPage,
    numberOfPages: state.adverts.numberOfPages,
    user: state.user,
    isFetching: state.ui.isFetching,
    error: state.ui.error,
    checkUser: isAuthorized(state.user),
    locateAdvertFromUrl: locateAdvertFromUrl(props.location, state.adverts)
  }
}

const mapDispatchToProps = {
   goDetail: getOneAdvert
  

};


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AdvertDetail);
