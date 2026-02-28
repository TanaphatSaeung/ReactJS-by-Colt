import Rating from '@mui/material/Rating';
import { useState } from 'react';

export default function RatingDemo() {
    const [score,setScore] = useState(0)

    return (
    <div>
        <h1>Rating Demo {score}</h1>
        <Rating name="half-rating" value={score} precision={0.5} onChange={(event, newValue) => setScore(newValue)} />
    </div>
  );
}