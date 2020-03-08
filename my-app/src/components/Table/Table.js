import React from 'react';
import { MDBDataTable } from 'mdbreact';

const DatatablePage = async () => {

    const rawData = await API.search().then(function(data){
        this.setState({results: data.results})



  const data = await API.search().then(function(data){
    this.setState({results: data.results})
});

  return (
    <MDBDataTable
      striped
      bordered
      small
      data={data}
    />
  );
})}

export default DatatablePage;