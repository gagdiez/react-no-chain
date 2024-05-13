import { Wallet } from "./wallet";

const socialDB = { 'testnet': 'v1.social08.testnet', 'mainnet': 'social.near' }

export class Social {
  /**
   * @constructor
   * @param {Object} options
   * @param {Wallet} options.wallet - the wallet object
   * @param {string} options.contractId - the contract id of the SocialDB contract
   */
  constructor({ wallet, contractId }) {
    this.wallet = wallet;
    this.contractId = contractId || socialDB[wallet.networkId];
  }

  /**
   * Social.get => Calls the `get` method in the SocialDB contract
   */
  get = (keys) => {
    return this.wallet.viewMethod({ contractId: this.contractId, method: 'get', args: { keys: [keys] } });
  };
}
