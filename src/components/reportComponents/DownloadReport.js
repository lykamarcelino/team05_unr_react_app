/*
*   Name: DownloadReport.js
*   Description: This file makes a fetch request to the backend and retrieves a previously created report.
*   The report is then downloaded and open for display (this section is currently a work in progress)
*   Date: 04/29/2020
*   Author: Chantelle Marquez Suarez
* */
import React from "react";

export default class DownLoadReport extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reportName: this.props.reportName,
            response: "",
        };
    }
    componentDidMount() {
        fetch('http://localhost:8080/openReport', {
            method: 'GET',
            headers:{
            'reportName': this.props.reportName,
            }})
            .then(res => res.json())
            .then(jsonresponse=>{
                this.setState({
                    response: jsonresponse,
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
            <div>
                <b>Report Open [work in progress]</b>
            </div>
        )
    }
}