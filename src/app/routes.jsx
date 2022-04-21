import { Switch, Route } from "react-router-dom"
import Accounts from "../containers/accounts/accounts"
import CreateAccount from "../containers/create-account/create-account"
import Transfer from "../containers/transfer/transfer"

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={CreateAccount} />
      <Route exact path="/accounts" component={Accounts} />
      <Route exact path="/transfer/:id" component={Transfer} />
    </Switch>
  )
}

export default Routes