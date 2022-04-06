import { Rating } from '@mui/material';
import React from 'react';

const Comment = ({ points, description, titleReview, clientName }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-lg mb-4">
      <div className="flex justify-between mb-1">
        <p className="text-base font-bold">{clientName}</p>
        <div className="flex">
          <span>
            <Rating name="puntaje" value={points} readOnly />
          </span>
          <span className="ml-2">{points}</span>
        </div>
      </div>
      <div>
        <div>
          <p className="text-sm font-bold">{titleReview}:</p>
        </div>
        <div>
          <p className="text-xs text-justify">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Comment;