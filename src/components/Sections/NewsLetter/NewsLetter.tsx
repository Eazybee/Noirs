import React from 'react';
import useform from 'useformbee';
import Style from './style.css';

const NewsLetter: React.FC = () => {
  const {
    values, errors, handleChange, handleSubmit
  } = useform({
    callback: () => {},
    rules: {
      email: 'email'
    }
  });

  return(
    <Style id='newsletter'>
      <span>
        <h1>Get The Newsletter</h1>
        <p>Featured properties from all over the world, special discounts, suggestions from our City Ambassadors, business perks and tips, gorgeous photography, and other updates are just a few things you can expect when you join exclusiveResult Newsletter.Sign Up now and be a part of the movement. The World is Yours.</p>

        <form  onSubmit={(e) => e.preventDefault()}>
          <label>
            What's Your Email?
            <input
              type='email'
              name='email'
              value={values.email}
              onChange={handleChange}
              placeholder='JohnDoe@gmail.com'
              required
              className={errors.email ? 'error' : ''}
            />
            {errors.email && <p>{errors.email}</p>}
          </label>
          <button type='submit'>Submit</button>
        </form>
      </span>
    </Style>
  );
};

export default NewsLetter;
