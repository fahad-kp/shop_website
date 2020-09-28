import React from 'react';
import './styles.scss';

function Item(props) {
  return (
        <div className="item">
            <img src={require(`./../assets/${props.name}`)}></img>
        </div>
  );
}

export default Item;
