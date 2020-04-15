import React from "react";
import ReportDisplay from "./ReportDisplay";

const newblock = {
    backgroundColor: "yellow",
    borderRadius: "50px",
    display: "block",
    width: "700px",
    height: "500px",
    marginLeft: "200px",
    marginTop: "50px",
    alignContent: "center"
}

export default class ReportFetch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reports: [],
            fetchdata:false,
        };
    }
    componentDidMount() {
        fetch('http://localhost:8080/getListofReports', {method: 'GET'})
            .then(res => res.json())
            .then(jsonresponse=>{
                this.setState({
                    reports:jsonresponse,
                })
                console.log("fetch was done")
                console.log(this.state)
                this.setState({fetchdata: true})
            })
            .catch(function(error) {
                console.log('There has been a problem with your fetch operation: ' + error.message);
                throw error;
            })
    }
    render(){
        console.log(this.state)
        return(<div style={newblock}>{this.state.fetchdata &&
        <ReportDisplay
            reportList= {this.state.reports}
        />}</div>)
    }
}