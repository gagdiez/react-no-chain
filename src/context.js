import { createContext } from 'react';

// Context to share wallet and signed account
export const NearContext = createContext({ wallet: undefined, signedAccountId: ''});