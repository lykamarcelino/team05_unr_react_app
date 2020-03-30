import React from 'react';

let token = localStorage.token
if (!token)
    token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
    'Accept': 'application/json',
    'access_token': 'AB115849225685ArRVhKoYDiSxyMR0zuHd7H4FPYeXGOFEAHiM',
    'realmId': '4620816365022138560'
}

export default class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          items: []
        };
    }
    componentDidMount() {
        fetch('http://localhost:8080/getUser', {headers})
            .then(res => res.json())
            .then(items=>this.setState({items}))
    }
    render() {
        const {items} = this.state;
        return (
            <div style={{textAlign: 'center', marginTop: '200px', marginLeft: '50px'}}>
                {items.test}
            </div>
        );
    }
}

