import React, {Component} from 'react';
import {Pie} from 'react-chartjs-2';

export default class PieGraph extends Component{
    constructor(props) {
        super(props);
        this.state = {
            chartData: props.chartData,
        }
    }

    static defaultProps = {
        displayTitle: true,
        displayLegend: true,
        legendPosition:'right',
        title: "Title"
    }

    render(){
        console.log(this.state.colors)
        return (
            <div className="barGraph">
                <Pie
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
                    }}
                />
            </div>
        )
    }
}
