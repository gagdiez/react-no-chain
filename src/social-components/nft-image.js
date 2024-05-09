import { NearContext } from '@/context';
import { useEffect, useState, useContext } from 'react';

export const NftImage = ({ contractId, tokenId, alt }) => {
  const { wallet, signedAccountId } = useContext(NearContext);

  const [imageUrl, setImageUrl] = useState("https://ipfs.near.social/ipfs/bafkreidoxgv2w7kmzurdnmflegkthgzaclgwpiccgztpkfdkfzb4265zuu");
  const [nftMetadata, setNftMetadata] = useState(null);
  const [tokenMetadata, setTokenMetadata] = useState(null);

  useEffect(() => {
    wallet.viewMethod({ contractId, method: "nft_metadata", alt }).then(setNftMetadata);
    wallet.viewMethod({ contractId, method: "nft_token", args: { token_id: tokenId } }).then((res) => {
      setTokenMetadata(res.metadata);
    });
  }, [wallet, contractId, tokenId]);

  useEffect(() => {
    if (!nftMetadata || !tokenMetadata) return;

    let tokenMedia = tokenMetadata.media || "";

    setImageUrl(tokenMedia);

    if (tokenMedia.startsWith("https://") || tokenMedia.startsWith("http://") || tokenMedia.startsWith("data:image")) {
      setImageUrl(tokenMedia);
    }
    if (nftMetadata.base_uri) setImageUrl(`${nftMetadata.base_uri}/${tokenMedia}`);
    if (tokenMedia.startsWith("Qm") || tokenMedia.startsWith("ba")) setImageUrl(`https://ipfs.near.social/ipfs/${tokenMedia}`);

  }, [nftMetadata, tokenMetadata])

  return (
    <img src={imageUrl} alt={alt} />
  );
}
