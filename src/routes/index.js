import { useRoutes } from "react-router-dom";
import MessagesScreen from "../pages/messages";
import Homepage from "../pages/homepage";
export default function ThemeRoutes() {
  return useRoutes([
    {
      path: "/",
      element: <Homepage/>,
    },
    {
      path: "/messages",
      element: <MessagesScreen />,
    },
  ]);
}
