import { NFT, NFTMetadata } from '@thirdweb-dev/sdk/dist/declarations/src/core/schema/nft';
import { z } from 'zod';

export interface CustomContractMetadata {
  /**
   * The name of the contract.
   */
  name: string;
  /**
   * A description of the contract.
   */
  description?: string;
  /**
   * The image associated with the contract.
   */
  image?: any;
  /**
   * An external link associated with the contract.
   */
  external_link?: string;
}

export interface CustomNFTMetadata extends NFTMetadata {
  qr_code: string;
}

export interface CustomNFT extends NFT {
  metadata: CustomNFTMetadata;
}
