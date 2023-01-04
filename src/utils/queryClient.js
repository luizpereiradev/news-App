import { QueryClient } from "react-query";
import { createWebStoragePersistor } from 'react-query/createWebStoragePersistor-experimental' 

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 1000, // 24 hours
    },
  },
})

export const localStoragePersistor = createWebStoragePersistor({storage: window.localStorage})
