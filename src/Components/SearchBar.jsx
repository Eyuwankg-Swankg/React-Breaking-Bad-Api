import React from "react";

function SearchBar({searchCharacters}){
    return <div class="search-container">
        <input placeholder="Search Characters..."/>
    </div>;
}

export default React.memo(SearchBar);