import React from "react";
import {Button} from "react-bootstrap";
import SubmitReportToBack from "./SubmitReportToBack";

export default class CreateReport extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            graphName: this.props.graphName,
            graphType: this.props.graphType,
            predictionType: this.props.predictionType,
            id: this.props.id,
            dates: this.props.dates,
            dataLabel: this.props.dataLabel,
            data: this.props.data,
            colors: this.props.colors,
            xAxisLabel: this.props.xAxisLabel,
            yAxisLabel: this.props.yAxisLabel,

            transactionData: this.props.transactionData,
            customerInfo: this.props.customerInfo,
            inventoryInfo: this.props.inventoryInfo,
            graph: this.props.graph,
            gridlines: this.props.gridlines,

            makeReport: false,
        }
        console.log("this is Create reports")
        console.log(this.state)
    }

    handleSubmit(event) {
        event.preventDefault()
        this.setState({makeReport: true})
    }

    render() {
        return(
            <div>
                <Button
                    variant="outline-dark"
                    type="submit"
                    style={{textAlign: 'center', marginLeft: '250px', marginTop: "0px", width: "150px", height: "40px"}}
                    onClick = {(e) => this.handleSubmit(e)}
                >
                    Create Report
                </Button>
                {this.state.makeReport && <SubmitReportToBack
                    graphName = {this.state.graphName}
                    graphType = {this.state.graphType}
                    predictionType = {this.state.predictionType}
                    id = {this.state.id}
                    dates = {this.state.dates}
                    dataLabel = {this.state.dataLabel}
                    data = {this.state.data}
                    colors = {this.state.colors}
                    xAxisLabel = {this.state.xAxisLabel}
                    yAxisLabel = {this.state.yAxisLabel}

                    transactionData = {this.state.transactionData}
                    customerInfo = {this.state.customerInfo}
                    inventoryInfo = {this.state.inventoryInfo}
                    graph = {this.state.graph}
                    gridlines = {this.state.gridlines}
                />}
            </div>
        );
    }
}