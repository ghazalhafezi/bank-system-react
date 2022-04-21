import { useRef } from "react";
import { Link } from "react-router-dom";
import { useConfig } from "../../store/ConfigProvider";
import "./create-account.scss"

const CreateAccount = () => {

    const inputNameRef = useRef();
    const inputLastNameRef = useRef();
    const inputCrediteRef = useRef();

    const {state, actions} = useConfig();

    const handleSubmit = (e) => {
        e.preventDefault();
        actions.addAccount(
            {
            name : inputNameRef.current.value,
            lastName : inputLastNameRef.current.value,
            accountNumber : Math.floor(Math.random() * 1000000000),
            id : Math.floor(Math.random() * 100),
            credit : inputCrediteRef.current.value,

        })
        alert('successful!');
        inputNameRef.current.value = "";
        inputLastNameRef.current.value = "";
        inputCrediteRef.current.value = "";
    }

    return(
        <>
        <Link className="accounts menu-item" to="/accounts">Accounts Page</Link>
        <h3>Creat account:</h3>
        <form className="create-account" onSubmit={handleSubmit}>
            <label htmlFor="">Name:</label>
            <input ref={inputNameRef} type="text" name="first-name" />
            <label htmlFor="">last name:</label>
            <input ref={inputLastNameRef} type="text" name="account-number" />
            <label htmlFor="">مبلغ</label>
            <input ref={inputCrediteRef} type="text" placeholder="مبلغ اولیه" />
            <button type="submit">create account</button>
        </form>
        </>
    )
}
export default CreateAccount;