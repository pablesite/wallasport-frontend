import { connect } from 'react-redux';
import CreateOrUpdate from './CreateOrUpdate';

import { createAdvert, updateAdvert } from '../../store/actions';
import { isAuthorized } from '../../store/selectors';


const mapDispatchToProps = {
  createAdvert: createAdvert,
  updateAdvert: updateAdvert,
};

function mapStateToProps(state) {
return {
    adverts: state.adverts, 
    user: state.user, 
    tagList: state.tags,
    checkUser: isAuthorized(state.user), 
  } 
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateOrUpdate);
