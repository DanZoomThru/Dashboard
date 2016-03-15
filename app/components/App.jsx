import _ from 'lodash';
import React from 'react';
import ParkingLotDashboard from './ParkingLotDashboard.jsx';

const styles = {
  default: {
    marginTop: 50
  }
};

export default class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="ui container" style={_.extend({}, styles.default, this.props.style)}>
        <ParkingLotDashboard />
      </div>
    );
  }

}