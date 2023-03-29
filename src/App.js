import { Provider } from "react-redux";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
