import { connect } from 'react-redux';
import Activities from './component';
import { activitiesSelector } from '../../selectors/activities';

const mapStateToProps = state => ({
  activities: activitiesSelector(state),
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Activities);
