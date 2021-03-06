/*
*   Name: GeneralForm.js
*   Description: This file displays the appropriate entry boxes, buttons and labels for the General Sales
*   prediction tab in the generate tab. It takes care of saving the user entries and upon submission
*   passes the data to GraphDisplay to show the appropriate predictions and graph.
*   Date: 04/29/2020
*   Author: Liliana Pacheco
* */
import React from 'react';
import {Form, Button} from "react-bootstrap";
import GraphDisplay from "../graphDisplays/GraphDisplay";

const newblock = {
    backgroundColor: "whitesmoke",
    borderRadius: "50px",
    display: "block",
    width: "650px",
    height: "600px",
    marginLeft: "25px",
    marginTop: "15px",
    alignContent: "center"
}

const checkboxBlock = {
    backgroundColor: "whitesmoke",
    borderRadius: "50px",
    display: "block",
    width: "230px",
    height: "300px",
    marginLeft: "210px",
    marginTop: "-300px",
    alignContent: "center",
}

const newblock2 = {
    backgroundColor: "whitesmoke",
    borderRadius: "50px",
    display: "block",
    width: "850px",
    height: "600px",
    marginLeft: "570px",
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
            notEmpty: false,
            transactionData: false,
            customerInfo: false,
            inventoryInfo: false,
            graph: false,
            gridlines: false,
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value,
                              notEmpty:false})
    }

    handleSubmit(event) {
        event.preventDefault()
        this.setState({notEmpty: true})
    }

    handleCheck(event){
        this.setState({[event.target.name]: event.target.checked,
                             notEmpty:false})
        console.log(this.state)
    }

    render() {

        return(<>
        <div style={newblock}>
            <br/>
            <div style={{marginLeft: "20px", marginTop: "20px", alignContent: 'center', fontSize:'1.8em', fontWeight:'bold'}}> Generate New Sales Predictions</div>
            <br></br>
            <div style={{textAlign: 'left', alignContent:'center'}}>
                <Form style={{marginLeft: '20px', marginRight: '20px'}}>
                    <label> Graph Title: </label>
                    <br/>
                    <input
                        style={{width: "400px", height: "35px"}}
                        name="fileName"
                        placeholder="My Graph"
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

                    <div style = {checkboxBlock}>
                        <label style = {{marginTop: "55px"}}>Report Options: </label>
                        <div style = {{marginTop: "5px"}}>
                        <label>
                            <input
                                type='checkbox'
                                name = "transactionData"
                                checked = {this.state.transactionData}
                                onChange =  {e => this.handleCheck(e)}
                            />
                            <span style ={{marginLeft: "10px"}}>Transaction Data</span>
                        </label>
                        </div>
                        <div style = {{marginTop: "10px"}}>
                            <label>
                                <input
                                    type='checkbox'
                                    name = "customerInfo"
                                    checked = {this.state.customerInfo}
                                    onChange =  {e => this.handleCheck(e)}
                                />
                                <span style ={{marginLeft: "10px"}}>Customer Information</span>
                            </label>
                        </div>
                        <div style = {{marginTop: "10px"}}>
                            <label>
                                <input
                                    type='checkbox'
                                    name = "inventoryInfo"
                                    checked = {this.state.inventoryInfo}
                                    onChange =  {e => this.handleCheck(e)}
                                />
                                <span style ={{marginLeft: "10px"}}>Inventory Information</span>
                            </label>
                        </div>
                        <div style = {{marginTop: "10px"}}>
                            <label>
                                <input
                                    type='checkbox'
                                    name = "graph"
                                    checked = {this.state.graph}
                                    onChange =  {e => this.handleCheck(e)}
                                />
                                <span style ={{marginLeft: "10px"}}>Graph</span>
                            </label>
                        </div>
                        <div style = {{marginTop: "10px"}}>
                            <label>
                                <input
                                    type='checkbox'
                                    name = "gridlines"
                                    checked = {this.state.gridlines}
                                    onChange =  {e => this.handleCheck(e)}
                                />
                                <span style ={{marginLeft: "10px"}}>Gridlines</span>
                            </label>
                        </div>
                    </div>

                    <br/><br/>
                    <Button
                        variant="outline-dark"
                        type="submit"
                        style={{textAlign: 'center', marginLeft: '250px', marginTop: "0px", width: "150px", height: "40px"}}
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
                    showButton = {true}

                    transactioData = {this.state.transactionData}
                    customerInfo = {this.state.customerInfo}
                    inventoryInfo = {this.state.inventoryInfo}
                    graph = {this.state.graph}
                    gridlines = {this.state.gridlines}
                />}



                <br/>
            </div>
            </>
        );
    }
}

