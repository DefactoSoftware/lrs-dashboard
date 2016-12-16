import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Application from '../components/Application';
import { getState as getLocationState } from '../selectors/location';
import { prop } from 'ramda';

class ApplicationContainer extends PureComponent {
  componentWillReceiveProps(nextProps) {
    if (!this.props.keepPrevious && nextProps.keepPrevious) {
      this.previousChildren = this.props.children
    }

    if (this.props.keepPrevious && !nextProps.keepPrevious) {
      this.previousChildren = null;
    }
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

const mapStateToProps = (state, ownProps) => ({
  keepPrevious: prop('keepPrevious', getLocationState(ownProps))
});


export default connect(mapStateToProps)(ApplicationContainer);
