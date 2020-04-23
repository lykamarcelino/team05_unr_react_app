import React from "react";
import ReportDisplay from "./ReportDisplay";

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
                console.log("Report fetch was done")
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
        return(
                <>
                    <div style={{marginLeft: '170px',marginTop: '0px',fontSize: '2rem', fontWeight: 'bold'}}>View your Reports</div>
                        <div style={{marginTop: '20px', marginLeft: '120px', width: '1100px', height: '400px'}}>
                            {this.state.fetchdata && <ReportDisplay reportList= {this.state.reports}/>}
                        </div>
                </>
        )
    }
}