import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';
import FeedbackItem from './FeedbackItem';

function FeedbackList({ feedback, handleDelete }) {
  return (
    <>
      {!feedback || feedback.length === 0 ? (
        <p>No Feedback Yet</p>
      ) : (
        <div className='feedback-list'>
          <AnimatePresence>
            {feedback.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
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

        // No animation
        // <div className='feedback-list'>
        //   {feedback.map((item) => (
        //     <FeedbackItem
        //       key={item.id}
        //       item={item}
        //       handleDelete={handleDelete}
        //     />
        //   ))}
        // </div>
      )}
    </>
  );
}

FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      rating: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
};

export default FeedbackList;
