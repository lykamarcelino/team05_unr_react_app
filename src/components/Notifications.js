import React from 'react';
import {Col, Row} from "react-bootstrap";

const notifications ={
    backgroundColor: "whitesmoke",
    borderRadius: "50px",
    display: "block",
    width: "1300px",
    height: "160px",
    textAlign: "left",
    marginLeft: "150px",
    marginTop: "30px",
    alignContent: "left"
}

export default class Notifications extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
    }
    componentDidMount() {
        fetch('http://localhost:8080/getNotifications', {method: 'GET'})
            .then(res => res.json())
            .then(items=>this.setState({items}))
            .catch(function(error) {
                console.log('There has been a problem with your fetch operation: ' + error.message);
                throw error;
            })
    }
    render() {
        const {items} = this.state;
        let itemArray = new Array(items.length);
        let i = 0;
        for(var key in items){
            itemArray[i] = items[key];
            i = i + 1;
        }

        return (
            <>
                <div>
                    <Row className="justify-content-md-center">
                        <Col md="auto" style={notifications}>
                            <div style={{textAlign:'left', marginLeft: '15px', marginTop: '15px', fontSize: '1.4em', fontWeight:'bold'}}> Notifications</div>
                            <div style={{marginTop:'8px'}}>
                                <i className="fa fa-exclamation-triangle fa-lg" style={{marginLeft: '15px', marginRight: '9px', color:'#800020'}}></i> <b style={{color:'#585858'}}>Check Inventory: </b>{itemArray[0]}
                                <br></br>
                                <i className="fa fa-clock-o fa-lg" style={{marginLeft: '15px', marginRight: '12px'}}></i> <b style={{color:'#585858'}}>Item Prediction: </b> {itemArray[1]}
                                <br></br>
                                <i className="fa fa-lightbulb-o fa-lg" style={{marginLeft: '17px', marginRight: '8px', color:'#add8e6'}}></i> &nbsp; <b style={{color:'#585858'}}> Sales Prediction: </b> {itemArray[2]}
                            </div>
                        </Col>
                    </Row>
                </div>
            </>
        );
    }
}
