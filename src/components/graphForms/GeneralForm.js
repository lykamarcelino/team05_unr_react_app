import React from 'react';
import {Form, Button} from "react-bootstrap";
import GraphDisplay from "../graphDisplays/GraphDisplay";

const newblock = {
    backgroundColor: "whitesmoke",
    borderRadius: "50px",
    display: "block",
    width: "600px",
    height: "600px",
    marginLeft: "25px",
    marginTop: "15px",
    alignContent: "center"
}
const newblock2 = {
    backgroundColor: "whitesmoke",
    borderRadius: "50px",
    display: "block",
    width: "800px",
    height: "600px",
    marginLeft: "550px",
    marginTop: "-600px",
    alignContent: "center"
}


export default class GeneralForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fileName: "",
            graphType: "",
            predFrequency: "",
            numPred: 0,
            showTable: false,
            notEmpty: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value})
    }

    handleSubmit(event) {
        this.setState({notEmpty: true})
        event.preventDefault()
    }


    render() {
        return(<>
        <div style={newblock}>
            <br/>
            <div style={{marginLeft: "20px", marginTop: "20px", alignContent: 'center', fontSize:'1.8em', fontWeight:'bold'}}> Generate New Sales Predictions</div>
            <br></br>
            <div style={{textAlign: 'left', alignContent:'center'}}>
                <Form style={{marginLeft: '20px', marginRight: '20px'}}>
                    <label> Report Name: </label>
                    <br/>
                    <input
                        style={{width: "400px", height: "35px"}}
                        name="fileName"
                        placeholder="My New Report"
                        value = {this.state.fileName}
                        onChange = {e => this.handleChange(e)}
                    />
                    <br/><br/>

                    <label> Graph Type: </label>
                    <br/>
                    <select
                        name = "graphType"
                        style={{width: "150px", height: "35px"}}
                        value = {this.state.graphType}
                        onChange={e => this.handleChange(e)}
                    >
                        <option value = "Graph Type"> My Graph</option>
                        <option value = "Line">Line</option>
                        <option value = "Bar">Bar</option>
                        <option value = "Scatter">Scatter</option>
                        <option value = "Pie">Pie</option>
                    </select>
                    <br/><br/>

                    <label> Prediction Frequency: </label>
                    <br/>
                    <select
                        name = "predFrequency"
                        style={{width: "150px", height: "35px"}}
                        value = {this.state.predFrequency}
                        onChange={e => this.handleChange(e)}
                    >
                        <option value = "Prediction Frequency">Frequency</option>
                        <option value = "Daily">Daily</option>
                        <option value = "Weekly">Weekly</option>
                        <option value = "Monthly">Monthly</option>
                    </select>

                    <br/><br/>
                    <label> Number of Predictions: </label>
                    <br/>
                    <input
                        style={{width: "80px", height: "35px"}}
                        name="numPred"
                        placeholder=" "
                        value = {this.state.numPred}
                        onChange = {e => this.handleChange(e)}
                    />

                    <br/><br/>
                    <Button
                        variant="outline-dark"
                        type="submit"
                        style={{textAlign: 'center', marginLeft: '250px', marginTop: "30px", width: "150px", height: "40px"}}
                        onClick = {(e) => this.handleSubmit(e)}
                    >
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
            <div style={newblock2}>
                <br/>
                {this.state.notEmpty && <GraphDisplay
                    graphName = {this.state.fileName}
                    numPred = {this.state.numPred}
                    graphType = {this.state.graphType}
                    predFrequency = {this.state.predFrequency}
                    showTable = {this.state.showTable}
                    from = "General_Sales"
                    id = "none"
                />}


                <br/>
            </div>
            </>
        );
    }
}

