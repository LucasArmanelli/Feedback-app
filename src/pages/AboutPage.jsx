import React from 'react'
import Card from '../components/shared/Card'
import {Link} from 'react-router-dom'

function AboutPage() {
  return (
    <Card>
      <p>This is a <b>Feedback App</b> to leave feedback for a product or a service</p>
      <p>Version: 0.0.1</p>
      <hr />
      <p>
        <Link to="/">Back To Home</Link>
      </p>
    </Card>
  )
}

export default AboutPage