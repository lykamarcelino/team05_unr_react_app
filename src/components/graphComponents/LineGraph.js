import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';

export default class LineGraph extends Component{
    constructor(props) {
        super(props);
        this.state = {
            chartData: props.chartData,
        }
    }

    static defaultProps = {
        displayTitle: true,
        displayLegend: true,
        legendPosition:'bottom',
        title: "Title"
    }

    render(){
        console.log(this.state.colors)
        return (
            <>
            <div className="barGraph">
                <Line
                    data={this.state.chartData}
                    options={{
                        elements: {
                            line: {
                                tension: 0
                            }
                        },
                        title:{
                            display: this.props.displayTitle,
                            text: this.props.title,
                            fontSize: 25
                        },
                        legend:{
                            display: this.props.showLegend,
                            position: this.props.legendPosition
                        },
                        scales:{
                            yAxes:[{
                                scaleLabel:{
                                    display: true,
                                    labelString: this.props.yAxisLabel,
                                    fontSize: 20
                                }
                            }],
                            xAxes:[{
                                scaleLabel: {
                                    display: true,
                                    labelString: this.props.xAxisLabel,
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
