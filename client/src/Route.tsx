import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { MainHome } from "./pages/Home/MainHome"

export const Route = () => {

    const routes = createBrowserRouter([
        {
            path: "/",
            element: <MainHome />,
            children: [

            ]
        }
    ])
    return <RouterProvider router={routes} />
}