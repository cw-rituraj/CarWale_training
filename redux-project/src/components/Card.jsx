import "../index.css";
import { useRef, useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Card = (props) => {
  // console.log(props);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const store = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const targetRef = useRef(null);
  console.log(store);
  const temp = useCallback((node) => {
    console.log("node");
  });

  const lastElement = useCallback((node) => {
    console.log(node);
    if (loading) return;
    if (targetRef.current) targetRef.current.disconnect();
    targetRef.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        console.log("visible");
        props.setpage(props.page + 1);
      }
    });

    if (node) targetRef.current.observe(node);
  });

  return (
    <div
      ref={props.last === true ? lastElement : temp}
      className="card-container"
    >
      <div className="img-container">
        <img src={props.imageUrl} alt="avatar" />
      </div>
      <div className="card-info-container">
        <div className="card-name">
          <p>{props.carName}</p>
        </div>
        <div className="card-info">
          <p className="card-km">{props.km} | </p>
          <p className="card-fuel">{props.fuel} | </p>
          <p className="card-areaName">{props.areaName} </p>
        </div>
        <div className="card-price">
          <p id="price">{props.price} </p>
          <span>|</span>
          <p id="offer">Make Offer</p>
        </div>
        <button className="card-button">
          <a href={props.url}> Get Seller Details</a>
        </button>
      </div>
    </div>
  );
};

export default Card;
