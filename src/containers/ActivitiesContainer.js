import { connect } from 'react-redux';
import Activities from '../components/Activities';
import { getSortedActivities } from '../selectors/activities';

const mapStateToProps = state => ({
  activities: getSortedActivities(state),
});

const mapDispatchToProps = dispatch => ({ no: 'yes' });

export default connect(mapStateToProps, mapDispatchToProps)(Activities);
