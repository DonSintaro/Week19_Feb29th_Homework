import React from "react";




function SearchBar(){
return (


    <form className="input-group mb-3 lookup">
        <div className="input-group-prepend">
            <button className="btn btn-outline-secondary" type="button" id="button-addon1">Search</button>
        </div>
        <input type="text" className="form-control" placeholder="Employee Name" aria-label="Employee" aria-describedby="basic-addon1" />
    </form>

)

}


export default SearchBar;