import React from "react";
import {Button, Table} from "react-bootstrap";
import DownloadReport from "./DownloadReport";

const newblock = {
    backgroundColor: "red",
    borderRadius: "50px",
    display: "block",
    width: "600px",
    height: "400px",
    marginLeft: "500px",
    marginTop: "50px",
    alignContent: "center"
}

export default class ReportDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reports: this.props.reportList,
            reportName: "",
            getReport: false,
        };
        console.log("Report Display State")
        console.log(this.state)
    }

    handleSubmit(event, reportN) {
        event.preventDefault()
        this.setState({getReport: true, reportName: reportN})
    }

    render() {
        return(
            <div style={{marginTop: '20px', marginLeft: '100px', width: '1100px', height: '400px'}}>
            <Table striped bordered hover variant={true} size="sm">
                <thead>
                    <tr>
                        <th style={{textAlign:'center'}}> Report Number </th>
                        <th style={{textAlign:'center'}}> Report Name </th>
                        <th style={{textAlign:'center'}}> Report Date </th>
                        <th style={{textAlign:'center'}}> Report Graph Type </th>
                        <th style={{textAlign:'center'}}> Download Report </th>
                    </tr>
                </thead>

                <tbody>
                {this.state.reports.map((report,i)=>
                    <tr id={i}>
                        <td style = {{textAlign:'center'}}>{report.number}</td>
                        <td style = {{textAlign:'center'}}>{report.name}</td>
                        <td style = {{textAlign:'center'}}>{report.date}</td>
                        <td style = {{textAlign:'center'}}>{report.graph}</td>
                        <td style = {{textAlign:'center'}}>
                            <Button
                                variant="outline-dark"
                                type="submit"
                                style={{textAlign: 'center', width: "150px", height: "35px"}}
                                onClick = {(e) => this.handleSubmit(e, report.name)}
                            >
                                Open Report
                            </Button>
                        </td>
                    </tr>
                )}
                {this.state.getReport && <DownloadReport reportName = {this.state.reportName}/>}
                </tbody>
            </Table>
            </div>
        )
    }
}