import React from "react";
import BarGraph from "../graphComponents/BarGraph";
import LineGraph from "../graphComponents/LineGraph";
import ScatterplotGraph from "../graphComponents/ScatterplotGraph";
import PieGraph from "../graphComponents/PieGraph";
import CreateReport from "../reportComponents/CreateReport";

export default class GraphDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            graphName: this.props.graphName,
            numPred: this.props.numPred,
            graphType: this.props.graphType,
            predFrequency: this.props.predFrequency,
            showTable: this.props.showTable,
            id: this.props.id,
            from: this.props.from,

            transactionData: this.props.transactioData,
            customerInfo: this.props.customerInfo,
            inventoryInfo: this.props.inventoryInfo,
            graph: this.props.graph,
            gridlines: this.props.gridlines,

            labels: null,
            dataLabel: null,
            data: null,
            colors: null,
            legendPosition: null,
            title: null,
            xAxisLabel: null,
            yAxisLabel: null,
            showLegend: null,
            dataFetched: false,
            varSet: false,


        }
    }

    componentDidMount() {
        fetch('http://localhost:8080/getGeneralGraph', {
            method: 'GET',
            headers: {
                'graphName': this.state.graphName,
                'numPred': this.state.numPred,
                'graphType': this.state.graphType,
                'predFrequency': this.state.predFrequency,
                'from': this.state.from,
                'id': this.state.id,
            }})
            .then(res => res.json())
            .then(jsonResponse => {
                this.setState({
                    labels: jsonResponse.labels,
                    dataLabel: jsonResponse.dataLabel,
                    data:jsonResponse.data,
                    colors: jsonResponse.colors,
                    legendPosition: jsonResponse.legendPosition,
                    title : jsonResponse.title,
                    xAxisLabel: jsonResponse.xAxisLabel,
                    yAxisLabel: jsonResponse.yAxisLabel,
                    showLegend: jsonResponse.showLegend,
                })
                console.log("fetch was done")
                console.log(this.state)
                this.setState({dataFetched: true})
            })
            .catch(function(error) {
                console.log('There has been a problem with your fetch operation: ' + error.message);
                throw error;
            })
    }

    render() {
        if(this.state.graphType === "Scatter") {
            var chartData = {
                labels: this.state.labels,
                datasets: [
                    {
                        label: this.state.dataLabel,
                        data: this.state.data,
                        backgroundColor: this.state.colors,
                        pointRadius: 5,
                        fill: false,
                        showLine: false
                    }
                ]
            }
        }
        else if (this.state.graphType === "Line"){
            var chartData = {
                labels: this.state.labels,
                datasets: [
                    {
                        label: this.state.dataLabel,
                        data: this.state.data,
                        backgroundColor: 'rgba(90, 120, 190, 0.6)',
                        fill: false,
                        borderColor: 'rgba(90, 120, 190, 0.6)',
                    }
                ]
            }
        }
        else {
            var chartData = {
                labels: this.state.labels,
                datasets: [
                    {
                        label: this.state.dataLabel,
                        data: this.state.data,
                        backgroundColor: this.state.colors,
                    }
                ]
            }
        }

    if(this.state.dataFetched){
        this.setState({varSet: true, dataFetched: false})
    }

    return(
        <div style={{textAlign: 'center', alignContent:'center', paddingTop: '30px', marginRight: "10px"}}>
            {this.state.varSet && this.state.graphType === "Bar" &&
                <BarGraph
                    chartData = {chartData}
                    title = {this.state.title}
                    xAxisLabel = {this.state.xAxisLabel}
                    yAxisLabel = {this.state.yAxisLabel}
                    showLegend = {false}
                    showButton = {true}
                />
            }
            {this.state.varSet && this.state.graphType === "Line" &&
            <LineGraph
                chartData = {chartData}
                title = {this.state.title}
                xAxisLabel = {this.state.xAxisLabel}
                yAxisLabel = {this.state.yAxisLabel}
                showLegend = {this.state.showLegend}
                showButton = {true}
            />
            }
            {this.state.varSet && this.state.graphType === "Scatter" &&
            <ScatterplotGraph
                chartData = {chartData}
                title = {this.state.title}
                xAxisLabel = {this.state.xAxisLabel}
                yAxisLabel = {this.state.yAxisLabel}
                showLegend = {false}
                showButton = {true}
            />
            }
            {this.state.varSet && this.state.graphType === "Pie" &&
            <PieGraph
                chartData = {chartData}
                title = {this.state.title}
                showLegend = {this.state.showLegend}
                showButton = {true}
            />
            }
            {this.state.varSet && <CreateReport
                graphName = {this.state.graphName}
                graphType = {this.state.graphType}
                predictionType = {this.state.from}
                id = {this.state.id}
                dates = {this.state.labels}
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
            {!this.state.varSet && <div style = {{marginTop: "200px"}}> loading... </div>}

        </div>
    )}
}
