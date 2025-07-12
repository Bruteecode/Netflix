import { Provider } from "react-redux";
import Body from "./Components/Body";
import appStore from "./Utils/AppStore";

export default function App() {
  return (
    <div>
      <Provider store={appStore}>
       <Body/>
      </Provider>
    </div>
  );
}