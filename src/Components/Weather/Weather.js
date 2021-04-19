import React from 'react';
// B O O T S T R A P P I N ~
import Table from 'react-bootstrap/Table';
// C S S
import 'bootstrap/dist/css/bootstrap.min.css';
import './Weather.css';

class Weather extends React.Component {

  render() {
    if (this.props.forecast.length === 0) {
      return ('');
    }
    return (
      <Table striped bordered hover variant="sm" fluid>
        <thead>
          <tr>
            <th>Date</th>
            <th>Forecast</th>
            <th>Low Temp</th>
            <th>High Temp</th>
          </tr>
        </thead>
        <tbody>
          {this.props.forecast.map((day, index) => (
            <tr key={index}>
              <td>{day.date}</td>
              <td>{day.description}</td>
              <td>{`${day.lowTemp}°c`}</td>
              <td>{`${day.hiTemp}°c`}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}


export default Weather;