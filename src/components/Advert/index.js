import { connect } from 'react-redux';

import Advert from './Advert';

import { user, showAdvertDetail, findInFavourites } from '../../store/selectors';
import { goToAdvertDetail, goToCreateAdvert, goToUpdateAdvert, markAsFavourite, markAsReserved, markAsSold } from '../../store/actions';

function mapStateToProps(state, props) {
  return {
    user: user(state),
    showAdvertDetail: showAdvertDetail(state),
    findInFavourites: findInFavourites(state, props.advert._id)
  };
}

const mapDispatchToProps = {
  goToAdvertDetail: goToAdvertDetail,
  goToCreateAdvert: goToCreateAdvert,
  goToUpdateAdvert: goToUpdateAdvert,
  markAsFavourite: markAsFavourite,
  markAsReserved: markAsReserved,
  markAsSold: markAsSold,

};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Advert);
