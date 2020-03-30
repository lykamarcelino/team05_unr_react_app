import React from 'react';

const newblock = {
    backgroundColor: "whitesmoke",
    borderRadius: "50px",
    display: "block",
    width: "1200px",
    height: "600px",
    marginLeft: "220px",
    marginTop: "40px",
}

let token = localStorage.token
if (!token)
    token = localStorage.token = Math.random().toString(36).substr(-8)

var obj = {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': '4620816365022138560'
    },
    body: {
      'access_token': 'eyJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwiYWxnIjoiZGlyIn0..Q-h_WSIjEo7VomzqpLgxkw.SRxf3u3zCOkT1CMNhPKesFaljWLEP4GDP8uJrrL2COR93bXKoJIpjqrVstafFtyhfLWOw6V0J3kgtvBFa6dtISNP_1jSPRYdZmnzZ7C7067VbYl_5iWlqrF55aQTIrDrsyZ4cBMsI-TRpUkN6f-nSWm31xmC1V6qNlARNk7d5hj3QHkqU5AAIRwVtCKvc43ztbp8QkcK-q6NSHUREfIBO9W2d0BZevHQ7t_aXDRy-x9k7wLWiTmDuX83sk7xaz_KkV92SmcdLDJ7TBGto1q8PuJtoFqvPNsvGol4V8y8qysV60SOgRSe7n9EJm5myLBEoWbxDJQgs6wKL1wuNdZQLZTFT6gRboHgwSDDcYlfwPa5bsbWrVcj5MmxVyubda6YPe1BPrhWTbI4ol2OeF3Fo3Ai9FDdbrrdJ7-CDJhFHyjYgwXx0h_ba6rBPtEAjUDXV8vacgd3tai7_UfSwVc3SpTY9jWB2JQZJsw_sjdOrCQHGjy0HNA41uZaDWP2BRaC3X5-uy6nT31RDubXdXbfb4cy2a6tDYPVW832AEyxtHUCCoAnu37AnZ9cOVnFV71Z-iGJAP5gy5JT8-DSn9bJI1fPf1yF14PrJ2mlcgVGbhw3tLL3nqrqL2Yn0lswAEq4ItvmRJn-4ftu6fvbCW2aViWKhzkIcof9M6EtUT0JMK8ia2yytgPmIMLLp24Lr6SiKlbYXkZU7BkdcbmXQzk33S9WCZ8dIXGPdXYFC5ZLxqo.NZfGGYvF6ZN1w3G1A6DUHA'
    }}


export default class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          items: []
        };
    }
    componentDidMount() {
        fetch('http://localhost:8080/getInventory', {obj})
            .then(res => res.json())
            .then(items=>this.setState({items}))
    }
    render() {
        const {items} = this.state;
        return (
        <>
            <div style={newblock}>
                <div style={{alignContent: 'center', marginLeft: '200px', marginTop: '20px', fontSize:'1.8em', fontWeight:'bold'}}> This page will hold the information exported from QuickBooks</div>
            </div>
            <div style={{textAlign: 'center', marginTop: '200px', marginLeft: '50px'}}>
                {items.response}
            </div>
        </>
        );
    }
}

