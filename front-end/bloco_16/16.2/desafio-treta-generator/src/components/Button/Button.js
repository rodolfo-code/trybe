import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

function Button(props) {
  const { onClick, to, label, value, className, disable } = props;
  return (
    <Link to={ to }>
      <button className={ `button ${className}` } type="button" value={ value } onClick={ onClick }>
        { label }
      </button>
    </Link>
  );
}

Button.defaultProps = {
  className: 'button',
  to: '/animal',
};

export default Button;
