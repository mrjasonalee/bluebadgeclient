import React from 'react';
import TurntableCreate from './turntablecreate';
import { Container, Row, Col } from 'reactstrap';

class TurntableIndex extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      workouts: []
    }
  }

  componentWillMount() {
    this.fetchTurntable()
  }

  fetchTurntable = () => {
    fetch("http://localhost:3000/turntable/log", {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': this.props.token
      })
    })
      .then((res) => res.json())
      .then((logData) => {
        return this.setState({ modelnumber: logData })
      })
  }

  render() {
    return (
      <Container>
        <Row>
          <Col md="3">
            {'TurntableIndex'}
            <TurntableCreate />
          </Col>
          <Col md="9">
            <h2>Add a Technics Turntable! Technics Only!</h2>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default TurntableIndex