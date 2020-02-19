import { connect } from 'react-redux';

import Advert from './Advert';

import { user, showAdvertDetail, findInFavourites } from '../../store/selectors';
import { getAdverts, goToAdvertDetail, goToCreateAdvert, goToUpdateAdvert, goToLogin, goToHome, markAsFavourite, markAsReserved, markAsSold } from '../../store/actions';

function mapStateToProps(state, props) {
  return {
    user: user(state),
    showAdvertDetail: showAdvertDetail(state),
    findInFavourites: findInFavourites(state, props.advert._id)
  };
}

const mapDispatchToProps = {
  getAdverts: getAdverts,
  goToAdvertDetail: goToAdvertDetail,
  goToCreateAdvert: goToCreateAdvert,
  goToUpdateAdvert: goToUpdateAdvert,
  goToLogin: goToLogin,
  goToHome: goToHome,
  markAsFavourite: markAsFavourite,
  markAsReserved: markAsReserved,
  markAsSold: markAsSold,

};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Advert);
