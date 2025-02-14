import { createBrowserRouter } from "react-router-dom";
import ListItems from "./pages/items/ListItems";
import CreateItems from "./pages/items/CreateItems";
import ShowItems from "./pages/items/ShowItems";
import UpdateItems from "./pages/items/UpdateItems";
import ItemsLayout from "./pages/items/ItemsLayout";
import Dashboard from "./components/Dashboard";
import RootLayout from "./pages/RootLayout";

const router = createBrowserRouter([{
    path: "/",
    element: <RootLayout />,
    children: [
        {   index: true, element: <Dashboard />},
        {
            path: "items",
            element: <ItemsLayout />,
            children: [
                { index: true, element: <ListItems /> },
                { path: "new", element: <CreateItems /> },
                { path: ":id", element: <ShowItems /> },
                { path: ":id/update", element: <UpdateItems /> },
            ]
        }
    ]
}])

export default router