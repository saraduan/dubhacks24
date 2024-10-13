import React, { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';
import { getDatabase, ref, push, set, off, onValue } from 'firebase/database';
import { db } from './index';

function Review(props) {
  const [reviewText, setReviewText] = useState('');
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({ date: '', text: '' });

  useEffect(() => {
    const fetchCompanyReviews = async () => {
      console.log(props.companyName);
      const companiesRef = ref(db, `companies/${props.companyName}/reviews`);

      onValue(companiesRef, (snapshot) => {
        const data = snapshot.val();
        console.log(data);
        if (data) {
          setReviews(data);
        }
      });
    };

    fetchCompanyReviews();
  }, []);
  

  const handleChange = (event) => {
    setReviewText(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const db = getDatabase();
    const newReviewRef = push(ref(db, `companies/${props.companyName}/reviews`));
    const newReviewData = {
      date: new Date().toISOString(),
      text: reviewText,
    };
    await set(newReviewRef, newReviewData);
    setReviewText('');
  };

  return (
    <div className="review-form">
      <form onSubmit={handleSubmit}>
        <textarea className="review-text" placeholder="Write your review here..." value={reviewText} onChange={handleChange} />
        <button type="submit" className="submit-button">Submit</button>
      </form>

      <div className="reviews-list">
        {Object.entries(reviews).map(([companyName, companyReviews]) => (
          <div key={companyName} className="reviews">
            <ul>
              {Object.values(companyReviews).map((review, index) => (

                  <p>{review}</p>

              ))}
            </ul>
    </div>
  ))}
</div>
    </div>
  );
}

export { Review };