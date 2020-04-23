import React from "react";
import LineGraph from "../graphComponents/LineGraph";
//import PieGraph from "../graphComponents/PieGraph";

const newblock = {
    backgroundColor: "whitesmoke",
    borderRadius: "50px",
    display: "block",
    width: "600px",
    height: "350px",
    marginLeft: "650px",
    marginTop: "-349px",
    alignContent: "center"
}

export default class StaticGraph extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: {},
            title: "General Sales By Week",
            xAxisLabel: "Date",
            yAxisLabel: "Sales in USD",
            showLegend: false,
        }
    }

    componentWillMount() {
        this.getChartData();
    }

    getChartData(){
        this.setState({
            chartData:{
                labels: [
                    "2019-11-28",
                    "2019-12-05",
                    "2019-12-12",
                    "2019-12-19",
                    "2019-12-26",
                    "2020-01-02",
                    "2020-01-09",
                    "2020-01-16",
                    "2020-01-23",
                    "2020-01-30",
                    "2020-02-06",
                    "2020-02-13",
                    "2020-02-20",
                    "2020-02-27",
                    "2020-03-05",
                    "2020-03-12",
                    "2020-03-19",
                    "2020-03-26",
                    "2020-04-02",
                    "2020-04-09",
                    "2020-04-16",
                    "2020-04-23",
                    "2020-04-30",
                    "2020-05-07",
                    "2020-05-14",
                    "2020-05-21",
                    "2020-05-28",
                    "2020-06-04",
                    "2020-06-11",
                    "2020-06-18",
                ],
                datasets:[
                    {
                        label:'Total Sales by USD',
                        borderColor: 'rgba(53, 75, 150, 0.6)',
                        backgroundColor: [
                            'rgba(80, 100, 200, 0.6)',
                            'rgba(60, 170, 185, 0.6)',
                            'rgba(110, 100, 110, 0.6)',
                            'rgba(130, 195, 165, 0.6)',
                            'rgba(30, 60, 110, 0.6)',
                            'rgba(175, 180, 110, 0.6)',
                            'rgba(30, 135, 190, 0.6)',
                            'rgba(35, 160, 100, 0.6)',
                            'rgba(60, 170, 185, 0.6)',
                            'rgba(110, 100, 110, 0.6)',
                            'rgba(30, 60, 110, 0.6)',
                            'rgba(175, 180, 110, 0.6)',
                            'rgba(30, 135, 190, 0.6)',
                            'rgba(100, 90, 50, 0.6)',
                            'rgba(35, 160, 100, 0.6)',
                            'rgba(80, 100, 200, 0.6)',
                            'rgba(60, 170, 185, 0.6)',
                            'rgba(110, 100, 110, 0.6)',
                            'rgba(130, 195, 165, 0.6)',
                            'rgba(30, 60, 110, 0.6)',
                            'rgba(175, 180, 110, 0.6)',
                            'rgba(30, 135, 190, 0.6)',
                            'rgba(35, 160, 100, 0.6)',
                            'rgba(60, 170, 185, 0.6)',
                            'rgba(110, 100, 110, 0.6)',
                            'rgba(30, 60, 110, 0.6)',
                            'rgba(175, 180, 110, 0.6)',
                            'rgba(30, 135, 190, 0.6)',
                            'rgba(100, 90, 50, 0.6)',
                            'rgba(35, 160, 100, 0.6)',
                            'rgba(80, 100, 200, 0.6)',
                            'rgba(60, 170, 185, 0.6)',
                            'rgba(110, 100, 110, 0.6)',
                            'rgba(130, 195, 165, 0.6)',
                            'rgba(30, 60, 110, 0.6)',
                            'rgba(175, 180, 110, 0.6)',
                            'rgba(30, 135, 190, 0.6)',
                            'rgba(35, 160, 100, 0.6)',
                            'rgba(60, 170, 185, 0.6)',
                            'rgba(110, 100, 110, 0.6)',
                            'rgba(30, 60, 110, 0.6)',
                            'rgba(175, 180, 110, 0.6)',
                            'rgba(30, 135, 190, 0.6)',
                            'rgba(100, 90, 50, 0.6)',
                            'rgba(35, 160, 100, 0.6)',
                        ],
                        fill: false,
                        lineTension: 0,
                        data:[
                            194.0546,
                            162.2839,
                            161.8198,
                            109.5793,
                            107.858,
                            139.4445,
                            147.5254,
                            149.9043,
                            192.2072,
                            146.7122,
                            140.6272,
                            156.1043,
                            122.936,
                            101.0369,
                            140.4756,
                            179.7195,
                            175.2348,
                            207.0753,
                            187.7341,
                            141.5373,
                            136.0635,
                            130.2276,
                            124.9152,
                            186.4054,
                            229.3901,
                            218.0315,
                            212.6233,
                            166.16,
                            101.4537,
                            90.4951
                        ],
                    }
                ]
            }
        });
    }

    render(){
        return(
            <div style = {newblock}>
                <LineGraph
                    chartData = {this.state.chartData}
                    title = {this.state.title}
                    xAxisLabel = {this.state.xAxisLabel}
                    yAxisLabel = {this.state.yAxisLabel}
                    showLegend = {true}
                />
            </div>)
    }
}