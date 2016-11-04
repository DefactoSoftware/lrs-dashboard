import React, { Component } from 'react';
import { connect } from 'react-redux';
import Application from '../components/Application';
import { addActivities } from '../actions/activities';
import activities from '../fixtures/activities';

class ApplicationContainer extends Component {
  componentWillMount () {
    this.props.onMount();
  }

  render () {
    return (
      <Application>
        {this.props.children}
      </Application>
    )
  }
}

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
  onMount: ()=> dispatch(addActivities(activities))
});

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationContainer);
