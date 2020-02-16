import { connect } from 'react-redux';

import Advert from './Advert';

import { user, showAdvertDetail } from '../../store/selectors';
import { goToAdvertDetail, goToCreateAdvert, goToUpdateAdvert, markAsReserved, markAsSold } from '../../store/actions';

function mapStateToProps(state) {
  return {
    user: user(state),
    showAdvertDetail: showAdvertDetail(state),
  };
}

const mapDispatchToProps = {
  goToAdvertDetail: goToAdvertDetail,
  goToCreateAdvert: goToCreateAdvert,
  goToUpdateAdvert: goToUpdateAdvert,
  markAsReserved: markAsReserved,
  markAsSold: markAsSold,

};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Advert);
