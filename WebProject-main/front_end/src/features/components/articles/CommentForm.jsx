import React, { useState } from "react"
import styles from "./articles.module.css"
import whiteArrow from "../../toolbox/buttons/svg/arrow-white.svg";

const CommentForm = () => {
    const [comment, setComment] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [checkbox, setCheckbox] = useState(false);

    const canSubmit = [comment, name, email].every(Boolean);

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <form className={`${styles.comment_group_form}`} onSubmit={handleSubmit}>
            <textarea value={comment} onChange={(e) => { setComment(e.target.value) }} placeholder="Rəy*" className={
`${styles.input_for_comment}`} />
            <div className={`${styles.personal_info_input}`}>
                <input value={name} onChange={(e) => { setName(e.target.value) }
} type="text" placeholder="Ad və Soyad*" className={`${styles.input_for_name}`}/>
                <input value={email} onChange={(e) => { setEmail(e.target.value) }
} type="email" pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$" placeholder="Email*" className={`${styles.input_for_email}`}/>
            </div>
            <div className={`${styles.input_checbox_section} d-flex align-center`}>
                <input className={`${styles.input_checbox} `} type="checkbox" value={checkbox} onChange={(e) => {
                    setCheckbox(!checkbox);
                }}/>
                <p className={`${styles.input_checbox_label} `}>
                    Növbəti dəfə şərh yazmaq üçün adımı və e-poçtumu bu brauzerdə yadda saxlayın.
                </p>
            </div>
            <button className={`${styles.form_submit_button}`} disabled={!canSubmit}>
                Paylaş
                <img src={whiteArrow} alt="think wise business articles"/>
            </button>
        </form>
    );
};

export default CommentForm