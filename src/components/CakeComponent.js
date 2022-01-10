import { buyCake } from "../redux";
import { connect } from "react-redux";
function CakeComponent(props) {
  return (
    <div className="App">
      No of Cakes - {props.noOfCakes}
      <br />
      <br />
      <button onClick={props.buyCake}>Buy</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    noOfCakes: state.noOfCakes
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => {
      dispatch(buyCake());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeComponent);
