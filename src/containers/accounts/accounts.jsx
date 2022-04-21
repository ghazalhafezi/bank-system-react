import { useConfig } from "../../store/ConfigProvider";
import { Link } from "react-router-dom";
import "./accounts.scss";

const Accounts = () => {

    const {state, actions} = useConfig();

    return (
        <>
        <Link className="menu-item" to="/">creat account</Link>
        <div className="accounts-list">
            {state?.accounts.map((item) => 
                <div className="account" key={item.accountNumber}>
                    <div>name : {item?.name}</div>
                     <div>last name : {item?.lastName}</div>
                    <div>account number : {item?.accountNumber}</div>
                    <div>credit : {item?.credit}</div>
                    {item.id && <Link className="transfer-button" to={`/transfer/${item.id}`}>transfer</Link>}
                </div>)}

        </div>
        </>
    )
}

export default Accounts