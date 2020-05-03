/*
*   Name: StaticGraph.js
*   Description: This File will take in Graph Data and display the correct graph depending on input. This
*   component is meant for static graphs. (Used in the main dashboard)
*   Date: 04/29/2020
*   Author: Liliana Pacheco
* */
import React from "react";
import LineGraph from "../graphComponents/LineGraph";
import BarGraph from "../graphComponents/BarGraph";
import ScatterplotGraph from "../graphComponents/ScatterplotGraph";
import PieGraph from "../graphComponents/PieGraph";

export default class StaticGraph extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            graphType: this.props.graphType,
            labels: this.props.labels,
            dataLabel: this.props.dataLabel,
            colors: this.props.colors,
            data: this.props.data,

            title: this.props.title,
            xAxisLabel: this.props.xAxisLabel,
            yAxisLabel: this.props.yAxisLabel,

            showLegend: this.props.showLegend,
            legendPosition: this.props.legendPosition,

            dataFetched: true,
            varSet: false,
        }
    }

    render(){

        var chartData;

        if(this.state.graphType === "Scatter") {
            chartData = {
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
            chartData = {
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
            chartData = {
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
            <>
                {this.state.graphType === "Bar" && this.state.varSet === true &&
                <BarGraph
                    chartData = {chartData}
                    title = {this.state.title}
                    xAxisLabel = {this.state.xAxisLabel}
                    yAxisLabel = {this.state.yAxisLabel}
                    showLegend = {false}
                />
                }
                {this.state.graphType === "Line" && this.state.varSet === true &&
                <LineGraph
                    chartData = {chartData}
                    title = {this.state.title}
                    xAxisLabel = {this.state.xAxisLabel}
                    yAxisLabel = {this.state.yAxisLabel}
                    showLegend = {this.state.showLegend}
                />
                }
                {this.state.graphType === "Scatter" && this.state.varSet === true &&
                <ScatterplotGraph
                    chartData = {chartData}
                    title = {this.state.title}
                    xAxisLabel = {this.state.xAxisLabel}
                    yAxisLabel = {this.state.yAxisLabel}
                    showLegend = {false}
                />
                }
                {this.state.graphType === "Pie" && this.state.varSet === true &&
                <PieGraph
                    chartData = {chartData}
                    title = {this.state.title}
                    showLegend = {this.state.showLegend}
                />}
            </>)
    }
}