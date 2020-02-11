import { connect } from 'react-redux';
import CreateOrUpdate from './CreateOrUpdate';

import { createAdvert, updateAdvert } from '../../store/actions';
import { isAuthorized } from '../../store/selectors';




function mapStateToProps(state) {
return {
    adverts: state.adverts.advertsInPages , 
    user: state.user, 
    tagList: state.tags,
    checkUser: isAuthorized(state.user), 
  } 
}


const mapDispatchToProps = {
  createAdvert: createAdvert,
  updateAdvert: updateAdvert,
};


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateOrUpdate);
