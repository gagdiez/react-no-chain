import { NearContext } from '@/context';
import { useEffect, useState, useContext } from 'react';

import { NftImage } from './nft-image';

export const Profile = ({ accountId }) => {
  const { wallet, signedAccountId } = useContext(NearContext);
  const [profile, setProfile] = useState(null);

  useEffect(() => {

    if (!accountId) return;

    wallet.viewMethod(
      {
        contractId: 'social.near', method: 'get',
        args: { keys: [`${accountId}/profile/**`] }
      }
    ).then(res => setProfile(res[accountId].profile));
  }, [accountId, wallet]);

  if (!accountId) return "Please pass an accountId";

  if (!profile) return "Loading profile...";

  return <>
    {profile.name}
    {profile.image.nft && <NftImage {...profile.image.nft} alt="profile" />}
  </>;
};
