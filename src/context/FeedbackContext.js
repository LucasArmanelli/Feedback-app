import {createContext, useState } from 'react';

const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {
  const [feedback, setFeedback] = useState([]);

  const deleteFeedback = (id) => {
    if(window.confirm('Are you sure?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  const addFeedback =  (newFeedback) => {
    setFeedback([newFeedback, ...feedback])
  }

  return (
    <FeedbackContext.Provider value={{feedback, deleteFeedback, addFeedback}}>
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext;