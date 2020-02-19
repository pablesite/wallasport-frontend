import { connect } from 'react-redux';
import CreateOrUpdate from './CreateOrUpdate';

import { createAdvert, updateAdvert, goToAdvertDetail, showListAction, goToHome } from '../../store/actions';
import { user, isAuthorized, locateAdvertFromUrl, tags, showCreateAdvert } from '../../store/selectors';


function mapStateToProps(state, props) {
  return {
    user: user(state),
    checkUser: isAuthorized(state),
    advertToEdit: locateAdvertFromUrl(state, props.location),
    tagList: tags(state),
    showCreateAdvert: showCreateAdvert(state),
  }
}

const mapDispatchToProps = {
  createAdvert: createAdvert,
  updateAdvert: updateAdvert,
  goToAdvertDetail: goToAdvertDetail,
  showListAction: showListAction,
  goToHome: goToHome,
};


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateOrUpdate);
