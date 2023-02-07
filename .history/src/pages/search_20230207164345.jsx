import { useState } from "react";

const Search = () =>{
    const [search, setSearch] = useState("")
    return(
        <div>
            <input type="text"/>
            <button type="button" onClick={}>検索</button>
        </div>
    )
}

export default Search;