import React from 'react'
import './preview.css'
import { Link } from 'react-router-dom';

export const Preview = () => {
  return (
    <div className="preview-container">
      <h1>What is <a href="https://www.midterm-budapest.com">www.midterm-budapest.com</a> ?</h1>
      <p>
        <a href="https://www.midterm-budapest.com">www.midterm-budapest.com</a> rent fully-furnished serviced apartments in Budapest
      </p>
      <p>
        They are specialised in Long and Medium-term Rentals in all of Budapest most sought-after areas.
      </p>
      <h1>Why another review website ?</h1>
      <p>
        You can read some reviews on their <a href="https://midterm-budapest.com/about-us/">website</a>
      </p>
      <p>
        Those reviews are not open, <a href="https://www.midterm-budapest.com">www.midterm-budapest.com</a> does not allow to review their service.
      </p>
      <h1>How ?</h1>
      <p>
        <Link to="https://www.midtermbudapest.com">www.midtermbudapest.com</Link> collect customers reviews and diffuse them.
      </p>
      <p>
        All reviews are dated and reviewed.
      </p>
      <p>
        You can report fake review by email: <a href="mailto:contact@midtermbudapest.com">contact@midtermbudapest.com</a>
      </p>
      <a
        rel="noreferrer"
        target="_blank"
        href="https://twitter.com/MidtermBudapest"
        className="twitter-follow-button"
        data-show-count="false">
        Follow us on twitter @MidtermBudapest
      </a>
      <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
    </div>
  )
}
