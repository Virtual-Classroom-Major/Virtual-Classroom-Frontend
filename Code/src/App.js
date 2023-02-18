import "./App.css";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import { useRecoilState, RecoilRoot } from "recoil";
import { alertState, authState } from "./atom";

import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import SuccessAlert from "./components/organisms/SuccessAlert";
import ErrorAlert from "./components/organisms/ErrorAlert";

function App() {
  const routing = useRoutes(routes());
  const [alert_state, setAlert_state] = useRecoilState(alertState);
  return (
    <div>
      <div style={{ position: "absolute", zIndex: 2, width: "100vw" }}>
        {alert_state.type === "Success" ? (
          <SuccessAlert message={alert_state.message} open={true} />
        ) : null}
        {alert_state.type === "Error" ? (
          <ErrorAlert message={alert_state.message} open={true} />
        ) : null}
      </div>
      <div className="App">{routing}</div>
    </div>
  );
}

export default App;
