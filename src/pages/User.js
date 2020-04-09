import React from 'react';

const newblock = {
    backgroundColor: "whitesmoke",
    borderRadius: "50px",
    display: "block",
    width: "700px",
    height: "500px",
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
                    User: {itemArray[1]} <br></br>
                    Email: {itemArray[4]} <br></br>
                    Date Joined: {itemArray[5]}
                </div>
            </div>
            </>
        );
    }
}

