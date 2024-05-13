import { NearContext } from '@/context';
import { useEffect, useState, useContext } from 'react';

export const Template = ({ param1, param2 }) => {
  const { wallet, signedAccountId } = useContext(NearContext);

  return <>
    {signedAccountId? `Hello ${signedAccountId}`: `Please login`}
  </>;
}
