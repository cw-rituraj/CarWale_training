import { useRef, useEffect, useState, useCallback } from "react";
import { started,success,error } from "./redux1/actions/status";
import Card from "./components/Card";
import { connect } from "react-redux";
import { getProduct } from "./redux1/actions/status";
import { useDispatch, useSelector } from "react-redux";
const App = ({ getProduct,started, data: { data, status } }) => {
  const [page, setpage] = useState(1);
 
  
  useEffect(() => {
    console.log("page ", page);
    getProduct(page);

  }, [getProduct,page]);


  let cards;

  if (data === null) {
    cards = <div>Loading...</div>;
  } else {
    cards = data.map((ele, index) => {
      if (data.length === index + 1) {
        return (
          <Card
            last={true}
            setpage={setpage}
            page = {page}
            className="card"
            key={ele.profileId}
            carName={ele.carName}
            price={ele.price}
            makeYear={ele.makeYear}
            fuel={ele.fuel}
            url={ele.url}
            imageUrl={ele.imageUrl}
            km={ele.km}
            areaName={ele.areaName}
          />
        );
      } else {
        return (
          <Card
            last = {false}
            className="card"
            key={ele.profileId}
            carName={ele.carName}
            price={ele.price}
            makeYear={ele.makeYear}
            fuel={ele.fuel}
            url={ele.url}
            imageUrl={ele.imageUrl}
            km={ele.km}
            areaName={ele.areaName}
          />
        );
      }
    });
  } 

  return (
    <div className="App">
      <h1 id="heading">CarWale</h1>
      <div className="card-wrapper">
        {cards}
      </div>
    </div>
  );
};


const mapStateToProps = (state) => ({
  data: state.data,
  status:'loading'
});

export default connect(mapStateToProps, { getProduct,started ,success,error })(App);
