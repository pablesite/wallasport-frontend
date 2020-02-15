import { connect } from 'react-redux';

import Advert from './Advert';
import { getOneAdvert, goToCreateAdvert, goToUpdateAdvert } from '../../store/actions';
import { showAdvertDetail, user } from '../../store/selectors';

function mapStateToProps(state) {
  return {
    showAdvertDetail: showAdvertDetail(state),
    user: user(state),
  };
}

const mapDispatchToProps = {
  getOneAdvert: getOneAdvert,
  goToCreateAdvert: goToCreateAdvert,
  goToUpdateAdvert: goToUpdateAdvert,

};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Advert);
