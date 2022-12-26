import React from "react";
import ReactDOM from "react-dom/client";

import { QueryClientProvider } from "react-query";
import { persistQueryClient } from 'react-query/persistQueryClient-experimental'
import { queryClient, localStoragePersistor } from "./utils/queryClient";

import App from "./App";
import "./index.css";

persistQueryClient({
  queryClient,
  persistor: localStoragePersistor,
})

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
