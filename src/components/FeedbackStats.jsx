import React from 'react'
import PropTypes from 'prop-types'

function FeedbackStats({ feedback }) {
  // calculate ratings average
  let average = feedback.reduce((acc, cur) => {
    return acc + cur.rating
  }, 0) / feedback.length

  // regular expression to remove excess characters, alternatively parseInt() can be used
  average = average.toFixed(1).replace(/[.,]0$/, '')

  const reviewCount = () => {
    if(feedback.length > 1) {
      return feedback.length + ' Reviews'
    } else if (feedback.length === 0) {
      return feedback.length + ' Reviews'
    } else {
      return feedback.length + ' Review'
    }
  }
  
  return (
    <div className="feedback-stats">
      <h4>
        {reviewCount()}
      </h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>  
    </div>
  )
}

FeedbackStats.propTypes = {
  feedback: PropTypes.array.isRequired,
}

export default FeedbackStats