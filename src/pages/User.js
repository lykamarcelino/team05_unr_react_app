import React from 'react';

/*
const newblock = {
    backgroundColor: "whitesmoke",
    borderRadius: "50px",
    display: "block",
    width: "1200px",
    height: "600px",
    marginLeft: "220px",
    marginTop: "40px",
}
*/

export default class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          items: []
        };
    }
    componentDidMount() {
        fetch('http://localhost:8080/getUser', {method: 'GET'})
            .then(res => res.json())
            .then(items=>this.setState({items}))
            .catch(function(error) {
                console.log('There has been a problem with your fetch operation: ' + error.message);
                throw error;
            })
    }
    render() {
        const {items} = this.state;
        return (
        <>
            <div style={{textAlign: 'center', marginTop: '200px', marginLeft: '50px'}}>
                This is a message!!
                {items.response}
            </div>
        </>
        );
    }
}

