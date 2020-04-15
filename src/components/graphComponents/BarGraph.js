import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';

export default class BarGraph extends Component{
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
                <Bar
                    data={this.state.chartData}
                    options={{
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
