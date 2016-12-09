import React, { Component } from 'react';
import { connect } from 'react-redux';
import Application from '../components/Application';

class ApplicationContainer extends Component {
  componentWillReceiveProps(nextProps) {
    if (!this.hasKeepPrevious(this.props) && this.hasKeepPrevious(nextProps)) {
      this.previousChildren = this.props.children
    }

    if (this.hasKeepPrevious(this.props) && !this.hasKeepPrevious(nextProps)) {
      this.previousChildren = null;
    }
  }

  hasKeepPrevious(props) {
    return props.location && props.location.state && props.location.state.keepPrevious;
  }

  render() {
    return (
      <Application>
        {this.previousChildren}
        {this.props.children}
      </Application>
    );
  }
}

export default connect()(ApplicationContainer);
