import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useConfig } from "../../store/ConfigProvider";
import "./transfer.scss"

const Transfer = ()=> {
    const {state, actions} = useConfig();
    const [fromAccountNumber, setfromAccountNumber] = useState("");
    const [fromCredit, setfromCredit] = useState("");
    const amountRef = useRef();
    const toAccountRef = useRef();
    const { id } = useParams();
    
    useEffect(()=>{
        findAccountNumber()
    },[]);

    const  findAccountNumber = ()=> {
        for(let item of state.accounts){
            if(item.id == id){
                setfromAccountNumber(item.accountNumber);
                setfromCredit(item.credit);
                
            }
        }
    }

    const handleTransfer = (e)=> {
        e.preventDefault();
        if(fromCredit > Number(amountRef.current.value)){
            
            actions.updateAccount(
                {
                    from : fromAccountNumber,
                    to : +toAccountRef.current.value,
                    amount : +amountRef.current.value
                }
            )
            alert('susscessful')
        }
        else {
            alert('invalid')
        }
    }

    return (
        <div>
            <Link className="menu-item" to="/">creat account</Link>
            <Link className="menu-item" to="/accounts">accounts page</Link>
            <form className="transfer" onSubmit={handleTransfer}>
                <label htmlFor="">From:</label>
                <input type="text" placeholder="from" value={fromAccountNumber} readOnly />
                <label htmlFor="">To:</label>
                <input ref={toAccountRef} type="text" placeholder="to" />
                <input ref={amountRef} type="text" placeholder="amount" />
                <button>transfer</button>
            </form>
        </div>
    )
}
export default Transfer