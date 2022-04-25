import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Routing from "./component/routing";
import { getConfiguration } from "./component/store/action";

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getConfiguration());
  }, []);

  return <Routing />;
}
