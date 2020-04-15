import React from "react";

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

export default class ReportFetch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reports: this.props.reportList,
        };
        console.log(this.state)
    }

    render() {
        return(
            <div style={newblock}> hello
                {this.state.reportList}
            </div>
        )
    }
}