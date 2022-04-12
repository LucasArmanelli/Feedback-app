import {v4 as uuidv4} from 'uuid';
import { createContext, useState } from 'react';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'This is a feedback item 1',
      rating: 10,
    },
    {
      id: 2,
      text: 'This is a feedback item 2',
      rating: 7,
    },
    {
      id: 3,
      text: 'This is a feedback item 3',
      rating: 9,
    },
  ])
  const [feedbackEdit, setfeedbackEdit] = useState({
    item: {},
    edit: false,
  })

  // Add feedback
  const addFeedback =  (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }

  // Delete feedback
  const deleteFeedback = (id) => {
    if(window.confirm('Are you sure?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }  

  // Set item(feedback) to be updated
  const editFeedback = (item) => {
    setfeedbackEdit({
      item,
      edit: true,
    })
  }

  return (
    <FeedbackContext.Provider value={{
      feedback,
      deleteFeedback,
      addFeedback,
      editFeedback,
      feedbackEdit,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext;