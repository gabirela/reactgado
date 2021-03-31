import { Switch, Route } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";

import { Main, Login } from "../pages";

function Routes() {
    return (
        <Switch>
            <Route path="/login" component={Login} />
            <PrivateRoute exact path="/" component={Main} />
        </Switch>
    );
}

export default Routes;