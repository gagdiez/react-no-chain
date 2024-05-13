import { createContext } from 'react';

/**
 * @typedef NearContext
 * @property {import('./near/wallet').Wallet} wallet Current wallet
 * @property {import('./near/social').Social} social A wrapper on SocialDB calls
 * @property {string} signedAccountId The AccountId of the signed user
 */

/** @type {import ('react').Context<NearContext>} */
export const NearContext = createContext({ 
  wallet: undefined,
  social: undefined,
  signedAccountId: ''
});