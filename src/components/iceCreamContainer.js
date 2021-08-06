import React from 'react';
import { connect } from 'react-redux';
import { buyIceCream } from '../redux';

function iceCreamContainer(props) {
  return (
    <div>
      <h2>Number of icecream {props.numOfIceCreams}</h2>
      <button onClick={props.buyIceCream}>Buy Icecream</button>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    numOfIceCreams: state.icecream.numOfIceCreams,
  };
};

const mapDispatchProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
  };
};

export default connect(mapStateToProps, mapDispatchProps)(iceCreamContainer);
