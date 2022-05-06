import React, { useState } from "react"
import styles from "./articles.module.css"
import { AiOutlineSearch } from "react-icons/ai";

const SearchForm = () => {
    const [text, setText] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <form className={`${styles.aside_search}`} onSubmit={handleSubmit}>
            <input value={text} onChange={(e) => {
                setText(e.target.value);
                console.log(text)
            }} className={`${styles.aside_search_input}`} placeholder={`Axtar`} type="text"/>
            <AiOutlineSearch className={`${styles.aside_search_input_icon}`}/>
        </form>
    );
};

export default SearchForm