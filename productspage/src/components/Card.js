import React, { useEffect, useRef, useState } from "react";

const Card = ({ x }) => {
    const[selected,setSelected]=useState(false)
    const rating=x?.rating?.rate
function showDetails(){
    setSelected((pre)=>!pre)
}

  return (
    <>
    <div   tabIndex={-1} className="card-wrapper-parent" onClick={()=>showDetails()} >
      <div className="card-wrapper">
        <div className="card-top">
          <div className="card-header">
            <div  className={rating>4?"greaterthanFour title":rating>2?"btwnTWOandFour title":"lessthanTWO title"} >{x?.rating?.rate}</div>
            <div>Edit</div>
          </div>
          <div className="img-wrapper"><img src={x.image} alt="images-shopping"/></div>
        </div>
        <div className="card-bottom">
        <div className="title">
            {x?.title.slice(0,10)}
        </div>
        <div className="product-details">
        {!selected&&
            <div>{x.description.slice(0,50)}...</div>
        }
        {selected&&
        <>
        <div>{x?.rating?.count}</div>
        <div>{x?.category}</div>
        <div><a href="/details">Details</a></div>
        </>
        }
        </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Card;
