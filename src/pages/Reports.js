import React from 'react';
import "../App.css"

//This file is being used to test being able to connect to a backend and fetching
//It currently is not functioning
//Render will have to be changed to render what is coming from getUser
class Reports extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }
    componentDidMount() {
        fetch("http://localhost:8080/getUser")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.items
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <error>Error: {error.message}</error>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <ul>
                    {items.map(item => (
                        <li key={item.SyncToken}>
                           {item.SyncToken}
                        </li>
                    ))}
                </ul>
            );
        }
    }
}


export default Reports;
