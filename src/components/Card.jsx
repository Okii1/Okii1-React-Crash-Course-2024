import React from 'react'

const Card = ({chilldren, bg='bg-gray-100'}) => {
  return  <div className={`${bg}  p-6 rounded-lg shadow-md`}>
        {chilldren}
    </div>;
};

export default Card;