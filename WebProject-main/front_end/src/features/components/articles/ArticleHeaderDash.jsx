// @ts-nocheck
import React from "react";
import Navigation from "../../navigation/Navigation";
import ArticleHeader from "./ArticleHeader";
import styles from "./articles.module.css";
import whiteThinkWiseLogo from "./../common/assets/svg/navigation-white-logo.svg";

const ArticleHeaderDash = ({ headerText, isArticle }) => {
    return (
        <div>
            <Navigation
                logo={whiteThinkWiseLogo}
                enable={false}
                textColor="text-white"
                bgColor="bg-white"
                isArticle={isArticle}/>
            <ArticleHeader text={headerText}/>
        </div>
    );
};

export default ArticleHeaderDash;