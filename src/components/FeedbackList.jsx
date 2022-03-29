import {motion, AnimatePresence} from 'framer-motion'

import PropTypes from 'prop-types'
import React from 'react'
import FeedbackItem from './FeedbackItem'

function FeedbackList({ feedback, handleDelete }) {
  if(!feedback || feedback.length === 0) {
    return <p>Empty feedback!</p>
  }

  return (
    <div className='feedback-list'>
      <AnimatePresence>
      {feedback.map((item) => (
        <motion.div
          key={item.id}
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
        >
          <FeedbackItem
            key={item.id}
            item={item}
            handleDelete={handleDelete}
          />
        </motion.div>
      ))} 
      </AnimatePresence>
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