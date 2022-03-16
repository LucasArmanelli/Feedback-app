import PropTypes from 'prop-types'
import React from 'react'
import FeedbackItem from './FeedbackItem'

function FeedbackList({ feedback, handleDelete }) {
  if(!feedback || feedback.length === 0) {
    return <p>Empty feedback!</p>
  }

  return (
    <div className='feedback-list'>
    {feedback.map((item) => (
      <FeedbackItem
        key={item.id}
        item={item}
        handleDelete={handleDelete}
      />
    ))}  
    </div>
  )
}

FeedbackList.propTypes = {
  FeedbackData: PropTypes.arrayOf({
    id: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    feedback: PropTypes.string.isRequired,
  })
}

export default FeedbackList