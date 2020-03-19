import React from 'react';

const newblock = {
    backgroundColor: "whitesmoke",
    borderRadius: "50px",
    display: "block",
    width: "1200px",
    height: "600px",
    textAlign: "center",
    marginLeft: "270px",
    marginTop: "40px",
    alignContent: "center"
}

export default class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }
    componentDidMount() {
        fetch('http://localhost:8080/getUser',{
            'Method':'GET',
            'Accept': 'application/json'
            })
            //I set this toString because of the return, is wrong??
            .then(res => res.json().toString())
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
            return <div className={newblock}>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div className={newblock}>Loading...</div>;
        } else {
            return (
                <div className={newblock}>{items}</div>
            );
        }
    }
}

