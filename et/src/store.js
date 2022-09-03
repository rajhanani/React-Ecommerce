import { createStore } from "redux";
import rootred from "./components/redux/reducer/main";

const store = createStore(
    rootred
)

export default store;