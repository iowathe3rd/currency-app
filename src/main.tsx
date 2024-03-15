import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import '@radix-ui/themes/styles.css'
import {Theme} from "@radix-ui/themes";
import {SWRConfig} from "swr";
import config from "./api/config.ts";
import Layout from "./layout";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/Home.tsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>,
        children: [
            {
                path: '/currency/:symbol',
                lazy: async () => {
                    const Currency = (await import('./pages/Currency.tsx')).default;
                    return { Component: Currency };
                }
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <SWRConfig value={config}>
          <Theme>
              <Layout>
                  <RouterProvider router={router}/>
              </Layout>
          </Theme>
      </SWRConfig>
  </React.StrictMode>,
)
