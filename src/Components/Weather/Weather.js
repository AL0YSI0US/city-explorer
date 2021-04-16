import React from 'react';
// B O O T S T R A P P I N ~
import Table from 'react-bootstrap/Table';
// C S S
import 'bootstrap/dist/css/bootstrap.min.css';
import './Weather.css';

class Weather extends React.Component {

  render() {
    return (
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Date : flows to the right</th>
            <th>x</th>
            <th>x</th>
            <th>x</th>
            <th>x</th>
            <th>x</th>
            <th>x</th>
            <th>x</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>weather : data flows to the right</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

export default Weather;

// TODO:
// display the return results to the viewer

// display_name
// lat
// lon
