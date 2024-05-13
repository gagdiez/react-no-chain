import { NearContext } from '@/context';
import { useEffect, useState, useContext } from 'react';

import { NftImage } from './nft-image';

export const Profile = ({ accountId }) => {
  const { wallet, social, signedAccountId } = useContext(NearContext);
  const [profile, setProfile] = useState(null);

  const userId = accountId || signedAccountId;

  useEffect(() => {
    if (!userId) return;

    social.get(`${userId}/profile/**`)
      .then(res => setProfile(res[userId].profile));
  }, [social, userId]);

  if (!userId) return "Please login";

  if (!profile) return "Loading profile...";

  return <>
    {profile.name}
    {profile.image.nft && <NftImage {...profile.image.nft} alt="profile" />}
  </>;
};
