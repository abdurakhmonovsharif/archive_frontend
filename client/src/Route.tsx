import {createBrowserRouter, RouterProvider} from "react-router-dom"
import {DefaultComponent, MainHome} from "./pages/home/sections/mainHome.tsx"
import {ROUTES} from "./constants/router.ts"
import News from "./pages/news/news.tsx"
import NewsById from "./pages/news/newsById.tsx";

export const Route = () => {

    const routes = createBrowserRouter([
        {

            path: ROUTES.home,
            element: <MainHome/>,
            children: [
                {
                    path: ROUTES.home, element: <DefaultComponent/>
                },
                {
                    path: ROUTES.news, element: <News/>
                },
                {
                    path: ROUTES.newsById, element: <NewsById/>
                }

            ]
        }
    ])
    return <RouterProvider router={routes}/>
}