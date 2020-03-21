import React from 'react';

export default class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          items: []
        };
    }
    componentDidMount() {
        fetch('http://localhost:8080/getUser', {
            method: 'GET',
            headers: new Headers({
                'realmId': '4620816365022138560',
                'Authorization': 'AB11584826765l40CZtdknd96cGfSKo1mklBITWatTrpi4akT0'
            })
        })
            .then(res => res.json())
            .then(items=>this.setState({items}))
    }

    render() {
        const {items} = this.state;
        return (
            <div style={{textAlign: 'center', marginTop: '200px', marginLeft: '50px'}}>
                {items.response}
            </div>
        );
    }
}

