import "./app.css";

import { useEffect, useState } from "react";

import { Nav } from "./components/Nav/Nav";
import { Captioner } from "./components/Caption/Captioner";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MantineProvider, Text } from "@mantine/core";

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
        element: (
          <Text py="xl" px="xl">
            ...soon™
          </Text>
        ),
      },
    ],
  },
]);

const container = document.getElementById("app");
const root = createRoot(container);

const RoutedApp = () => {
  const [messages, setMessages] = useState();

  return (
    <MantineProvider
      theme={{ colorScheme: "dark" }}
      withGlobalStyles
      withNormalizeCSS
    >
      <RouterProvider router={router} />
    </MantineProvider>
  );
};

root.render(<RoutedApp />);
