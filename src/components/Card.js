import React from 'react'

//class Card extends PureComponent => this class only rerenders when the props change => may miss some prop changes in deeply nested objects

const Card = ({name, email, id}) => {
  return (
    <div className=' tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img alt='robots' src={`https://robohash.org/${id}?size=200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;