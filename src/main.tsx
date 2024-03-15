import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import '@radix-ui/themes/styles.css'
import {Theme} from "@radix-ui/themes";
import {SWRConfig} from "swr";
import config from "./api/config.ts";
import Layout from "./layout";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <SWRConfig value={config}>
          <Theme>
              <Layout>
                  <App />
              </Layout>
          </Theme>
      </SWRConfig>
  </React.StrictMode>,
)
