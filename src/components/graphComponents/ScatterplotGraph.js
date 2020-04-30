/*
*   Name: ScatterplotGraph.js
*   Description: This file can take in chart Data and display it in the form of a
*   scatter plot graph using Chart.js
*   Date: 04/29/2020
*   Author: Liliana Pacheco
* */
import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';

export default class ScatterplotGraph extends Component{
    constructor(props){
        super(props);
        this.state = {
            chartData:props.chartData,
        }
    }

    static defaultProps = {
        displayTitle:true,
        displayLegend: true,
        legendPosition:'bottom',
        title: "Graph Title"
    }

    render(){
        return (
            <>
            <div className="scatterplotGraph">
                <Line
                    data={this.state.chartData}
                    options={{
                        title:{
                            display:this.props.displayTitle,
                            text:this.props.title,
                            fontSize:25
                        },
                        legend:{
                            display:this.props.displayLegend,
                            position:this.props.legendPosition
                        },
                        scales:{
                            yAxes:[{
                                scaleLabel:{
                                    display: true,
                                    labelString: 'Total Predicted Sales (USD)',
                                    fontSize: 20
                                }
                            }],
                            xAxes:[{
                                scaleLabel: {
                                    display: true,
                                    labelString: "Date",
                                    fontSize: 20
                                }
                            }]
                        }
                    }}
                />
            </div>
           </>
        )
    }
}
