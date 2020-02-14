import { connect } from 'react-redux';
import CreateOrUpdate from './CreateOrUpdate';

import { createAdvert, updateAdvert, getOneAdvert, getAdverts,  goApp, showList } from '../../store/actions';
import { isAuthorized, locateAdvertFromUrl } from '../../store/selectors';


function mapStateToProps(state, props) {
return {
    // adverts: state.adverts.advertsInPages , 
    adverts: state.adverts,
    user: state.user, 
    tagList: state.tags,
    checkUser: isAuthorized(state.user), 
    showRegister: state.homeModals.showRegister,
    showUserRegistered: state.homeModals.showUserRegistered,
    showCreateAdvert: state.homeModals.showCreateAdvert,
    advertToEdit: locateAdvertFromUrl(props.location, state.adverts),
  } 
}


const mapDispatchToProps = {
  createAdvert: createAdvert,
  updateAdvert: updateAdvert,
  getOneAdvert: getOneAdvert,
  getAdverts: getAdverts,
  // goToHome: goToHome,
  goApp: goApp,
  showList: showList,
};


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateOrUpdate);
