import { connect } from 'react-redux';
import Activities from './component';
import { getSortedActivities } from '../../selectors/activities';

const mapStateToProps = state => ({
  activities: getSortedActivities(state),
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Activities);
