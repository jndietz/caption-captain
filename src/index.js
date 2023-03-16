import './app.css';
import { Nav } from "./components/Nav/Nav";
import { Captioner } from './components/Caption/Captioner';
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MantineProvider } from '@mantine/core';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Nav />,
        children: [
            {
                path: "/caption",
                element: <Captioner />,
            },
            {
                path: "/settings",
                element: <h1>...soon™</h1>
            }
        ]
    },
]);

const container = document.getElementById("app");
const root = createRoot(container);

const RoutedApp = () => (
    <MantineProvider theme={{ colorScheme: 'dark' }} withGlobalStyles withNormalizeCSS>
        <RouterProvider router={router} />
    </MantineProvider>
)

root.render(<RoutedApp />);