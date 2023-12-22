'use client'

import { NextPage } from 'next';
import { Provider } from 'react-redux';
import { setupStore } from '../store/store'

const store = setupStore()

const StorageProvider: NextPage<{ children: any }> = ({ children }) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}

export default StorageProvider;