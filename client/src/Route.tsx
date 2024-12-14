import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { DefaultComponent, MainHome } from "./pages/home/sections/mainHome.tsx"

export const Route = () => {

    const routes = createBrowserRouter([
        {

            path: "/",
            element: <MainHome />,
            children: [
                {
                    path: "/", element: <DefaultComponent />
                }
            ]
        }
    ])
    return <RouterProvider router={routes} />
}