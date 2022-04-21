import { Children, createContext, useContext, useReducer } from "react";


const ADD_ACCOUNt = 'ADD_ACCOUNt';
const UPDATE_ACCOUNT = 'UPDATE_ACCOUNT';

const initialStateValue = {
    accounts : [{
        name : null,
        lastName : null,
        accountNumber : null,
        id : null,
        credit : null
    }]
}

const defaultConfigValues = {
    state : initialStateValue,
    actions : {}
}

const ConfigContext = createContext(defaultConfigValues);

const ConfigReducer = (state, action) => {
    
    switch(action.type){
        case ADD_ACCOUNt :
            return {
                accounts :[...state.accounts, action.account]
            };
        case UPDATE_ACCOUNT : 
            state.accounts.forEach((item, index)=>{
                if(item.accountNumber == action.updatedAccount.from){
                    state.accounts[index].credit = Number(item.credit) - Number(action.updatedAccount.amount);
                }
              
                if(item.accountNumber == action.updatedAccount.to){
                    state.accounts[index].credit = state.accounts[index].credit = Number(item.credit) + Number(action.updatedAccount.amount);
                }
        })

            return {
                accounts :[...state.accounts]
            }    
            default:
                return state
                
    }

}

const ConfigStore = ({children, initialState = initialStateValue} ) => {
    const [state, dispach] = useReducer(ConfigReducer, initialState);

    const addAccount = (account) =>{
        dispach ({
            type : ADD_ACCOUNt,
            account
        })
    }
    const updateAccount = (updatedAccount) =>{
        dispach ({
            type : UPDATE_ACCOUNT,
            updatedAccount
        })
    }
    const values = {
        state,
        actions : {
            addAccount,
            updateAccount
        }
    }

    return (
        <ConfigContext.Provider value = {values}>
            {children}
        </ConfigContext.Provider>
    )
}
const useConfig = () => {
    const context = useContext(ConfigContext);
    return context;
}

export {useConfig}
export default ConfigStore;