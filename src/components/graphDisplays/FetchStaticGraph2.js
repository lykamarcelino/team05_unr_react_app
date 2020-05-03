/*
*   Name: FetchStaticGraph2.js
*   Description: This file will form a fetch request for the second latest graph created by a
*   Sales Forecasting user then transfer the data to staticGraph for Display.
*   Date: 04/29/2020
*   Author: Liliana Pacheco
* */
import React from "react";
import StaticGraph from "./StaticGraph";

export default class FetchStaticGraph2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            labels: [],
            dataLabel: "",
            data:[],
            colors: [],
            legendPosition: "",
            title : "",
            xAxisLabel: "",
            yAxisLabel: "",
            showLegend: "",
            graphType: "",
            fill: false,
            fetchDone: false,
        }
    }

    componentDidMount() {
        fetch('http://localhost:8080/getGraphTwo', {method: 'GET',})
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
                    graphType: jsonResponse.graphType,
                    fill: jsonResponse.fill,
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

    render(){
        return(
            <>
                {this.state.fetchDone &&
                <StaticGraph
                    labels = {this.state.labels}
                    dataLabel = {this.state.dataLabel}
                    data =  {this.state.data}
                    colors = {this.state.colors}
                    legendPosition =  {this.state.legendPosition}
                    title = {this.state.title}
                    xAxisLabel = {this.state.xAxisLabel}
                    yAxisLabel = {this.state.yAxisLabel}
                    showLegend = {this.state.showLegend}
                    graphType = {this.state.graphType}
                    fill = {this.state.fill}
                />}
            </>
        )
    }
}