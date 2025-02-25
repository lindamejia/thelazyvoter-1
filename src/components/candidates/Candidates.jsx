import React, { Component } from "react";
import Bernie from "../../images/bernie.svg";
import Joe from "../../images/joe.svg";
import Elizabeth from "../../images/elizabeth.svg";
import Kamala from "../../images/kamala.svg";
import Andrew from "../../images/andrew.svg";
import style from "./Candidates.module.css";
import axios from 'axios';

export default class Candidates extends Component {

  // state = {
  //   candidates: []
  // }

  // componentDidMount() {
  //   axios.get("https://www.googleapis.com/civicinfo/v2/voterinfo?key=AIzaSyBJRZ0d86mhK-7OQF4KDBarg9Yi6MBe-rs&address=1263%20Pacific%20Ave.%20Kansas%20City%20KS&electionId=2000")
  //     .then(res => {
  //       console.log(res)
  //       // const candidates = res.data;
  //       // this.setState({ candidates });
  //     })
  // }

  render() {
    return (
      <div style={{color:"black", margin:"30px"}} id="candidates">
             <h2 style={{margin:"175px 0px 50px 0px"}}> WHO'S RUNNING? </h2>
             <div className="container">
        <div className="row justify-content-center">
          <div className="card col-sm-12 col-md-4">
            <h2 className={style.name}> Bernie Sanders </h2>
            <img src={Bernie} alt="Bernie" className={style.images} />
            <p> Bernie cares about... </p>
            <p> Join Bernie's campaign!</p>
          </div>
          <div className="card col-sm-12 col-md-4">
            <h2 className={style.name}> Joe Biden </h2>
            <img src={Joe} alt="Joe" className={style.images} />
            <p> Joe cares about... </p>
            <p> Join Joe's campaign!</p>
          </div>
          <div className="card col-sm-12 col-md-4">
            <h2 className={style.name}> Elizabeth Warren </h2>
            <img src={Elizabeth} alt="Elizabeth" className={style.images} />
            <p> Elizabeth cares about... </p>
            <p> Join Elizabeth's campaign!</p>
          </div>
          <div className="card col-sm-12 col-md-4">
            <h2 className={style.name}> Kamala Harris </h2>
            <img src={Kamala} alt="Kamala" className={style.images} />
            <p> Kamala cares about... </p>
            <p> Join Kamala's campaign!</p>
          </div>
          <div className="card col-sm-12 col-md-4">
            <h2 className={style.name}> Andrew Yang </h2>
            <img src={Andrew} alt="Andrew" className={style.images} />
            <p> Andrew cares about... </p>
            <p> Join Andrew's campaign!</p>
          </div>
        </div>
      </div>
      </div>
    );
  }
}
