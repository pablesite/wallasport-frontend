import { connect } from 'react-redux';
import CreateOrUpdate from './CreateOrUpdate';

import { createAdvert, updateAdvert, getOneAdvert, showList } from '../../store/actions';
import { user, isAuthorized, locateAdvertFromUrl, tags, showCreateAdvert } from '../../store/selectors';


function mapStateToProps(state, props) {
  return {
    user: user(state),
    checkUser: isAuthorized(state),
    advertToEdit: locateAdvertFromUrl(props.location, state),
    tagList: tags(state),
    showCreateAdvert: showCreateAdvert(state),
  }
}

const mapDispatchToProps = {
  createAdvert: createAdvert,
  updateAdvert: updateAdvert,
  getOneAdvert: getOneAdvert,
  showList: showList,
};


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateOrUpdate);
