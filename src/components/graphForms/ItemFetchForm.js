import React from "react";
import ItemForm from "./ItemForm";

export default class ItemFetchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemList: [],
            fetchDone: false,
        }
    }

    componentDidMount() {
        fetch('http://localhost:8080/getItemList', {method: 'GET',})
            .then(res => res.json())
            .then(jsonResponse => {
                this.setState({
                    itemList: jsonResponse,
                })
                console.log("fetch was done")
                console.log(this.state)
                this.setState({fetchDone: true})
            })
            .catch(function(error) {
                console.log('There has been a problem with your fetch operation: ' + error.message);
                throw error;
            })
    }

    render(){
        return(
            <div>
                { this.state.fetchDone && <ItemForm itemList = {this.state.itemList}/>}
            </div>)
    }
}