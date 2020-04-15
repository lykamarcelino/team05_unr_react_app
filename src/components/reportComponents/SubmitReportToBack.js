import React from "react";

export default class SubmitReportToBack extends React.Component{
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

            response: "",
            fetchDone: false,
        }
    }

    componentDidMount() {
        fetch('http://localhost:8080/getMakeReport', {
            method: 'GET',
            headers: {
                'graphName': this.props.graphName,
                'graphType': this.props.graphType,
                'predictionType': this.props.predictionType,
                'id': this.props.id,
                'dates': this.props.dates,
                'dataLabel': this.props.dataLabel,
                'data': this.props.data,
                'colors': this.props.colors,
                'xAxisLabel': this.props.xAxisLabel,
                'yAxisLabel': this.props.yAxisLabel,

                'transactionData': this.props.transactionData,
                'customerInfo': this.props.customerInfo,
                'inventoryInfo': this.props.inventoryInfo,
                'graph': this.props.graph,
                'gridlines': this.props.gridlines,
            }})
            .then(res => res.json())
            .then(jsonResponse => {
                this.setState({
                    response: jsonResponse.response,
                })
                console.log("fetch was done")
                console.log(this.state)
                this.setState({fetchDone: true})
            })
            .catch(function(error) {
                console.log('There has been a problem with your fetch operation: ' + error.message);
                throw error;
            })
    }

    render() {
        return(
            <div>
                {this.state.fetchDone && <div>response</div>}
            </div>
        );
    }
}