import React from "react";
import { Container, Row, Col } from "../Grid";
// import { RandomNumber, Zonk } from "../pages";
// import Yoda from "../images/yoda.jpg";
// import Empire from "../images/empire.jpg";
// import Rebelion from "../images/rebelion.png";
// import StormTrooper from "../images/stormtrooper.jpg";
// import StarWars from "../images/starwars.jpg";
// import DarthVader from "../images/darthvader.jpg";
// import "./src/components/Bootstrap/index.css"
const styles= {
    jumbotron: {
        background: "https://images.pexels.com/photos/1308624/pexels-photo-1308624.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    }
};

export default class Bootstrap extends React.Component {
    render() {
    return (
        
<Container >
        <div style={styles.jumbotron}>
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">Clicky Game</h1>
                <h6>Click on an image to earn points, but don't click on any one more than once!!!</h6>
            </div>
        </div>
        </div>

<Row>

 <div className="score align-right">
    Total Points {this.totalPoints()}
</div>
</Row>
<Row>
<Col>


<div>
</div>
</Col>
</Row>
</Container>
       
    );
}
}
