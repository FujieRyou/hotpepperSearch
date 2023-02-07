import { useState } from "react";

const Search = () =>{
    const [search, setSearch] = useState("")
    return(
        <div>
            <input type="text" onChange={(e)=>{setSearch(e.target.value)}}/>
            <button type="button">検索</button>
        </div>
    )
}

export default Search;