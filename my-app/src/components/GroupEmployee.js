import React, { Component } from "react";
import Employee from "./Employee";
import DirectoryHeader from "./DirectoryHeader"
import API from "../utils/API";
import SearchBar from "./SearchBar"

// import { render } from "@testing-library/react";


class GroupEmployee extends Component {
    state = {
      results: [],
      searched: ""
    };


    componentDidMount() {
        let self = this;
        return (API.search().then(function(data){
            self.setState({results: data.data.results}) 
            console.log(self.state.results)
        
            })
        )
    }


    render(){

        

        
    return (
        <div>
            <DirectoryHeader/>
            <div className="container content">

                <SearchBar  searched={this.state.searched} />


                <Employee results={this.state.results}/>



            </div>
        </div>
    )

    }



};





export default GroupEmployee;