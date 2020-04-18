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
                <b>Report Downloaded</b>
            </div>
        )
    }
}