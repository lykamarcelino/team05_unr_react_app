/*
    Is used to display user information from the backend and QuickBooks API
    @Notes: Lyka Marcelino, 04/09/2020
 */

import React from 'react';

const newblock = {
    backgroundColor: "whitesmoke",
    borderRadius: "50px",
    display: "block",
    width: "700px",
    height: "570px",
    marginLeft: "500px",
    marginTop: "50px",
    alignContent: "center"
}

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
        let itemArray = new Array(items.length);
        let i = 0;
        for(var key in items){
            itemArray[i] = items[key];
            i = i + 1;
        }

        return (
            <>
                <div style={newblock}>
                    <div style={{textAlign: 'center', alignContent:'center', paddingTop: '130px'}}>
                        <i className="fa fa-user-circle-o fa-5x" style={{alignContent:'center', marginTop:'20px', marginBottom: '20px'}}></i>
                        <br></br>
                        <b> User: </b> {itemArray[1]} <br></br>
                        <b> Email: </b> {itemArray[4]} <br></br>
                        <b> Date Joined: </b> {itemArray[5]}
                    </div>
                </div>
            </>
        );
    }
}
