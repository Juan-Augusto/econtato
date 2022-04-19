import { useRoutes } from 'react-router-dom';
import { Home } from '../Pages/Home/Home';
import {NotFound} from '../Pages/NotFound';
export const Routes = () => {
    return useRoutes(
        [
            {path: '/', element: <Home />},
            {path: '/*', element: <NotFound/>}
        ]
    )
}