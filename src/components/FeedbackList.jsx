import FeedbackItem from './FeedbackItem';

function FeedbackList({ feedback }) {
  return (
    <>
      {!feedback || feedback.length === 0 ? (
        <p>No Feedback Yet</p>
      ) : (
        <div className='feedback-list'>
          {feedback.map((item) => (
            <FeedbackItem key={item.id} item={item} />
          ))}
        </div>
      )}
    </>
  );
}

export default FeedbackList;
