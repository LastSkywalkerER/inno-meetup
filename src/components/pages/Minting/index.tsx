import { CircularProgress, Paper } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {
  CustomContractMetadata,
  useActiveClaimConditionForWallet,
  useAddress,
  useClaimConditions,
  useClaimedNFTSupply,
  useContract,
  useMetadata,
  useOwnedNFTs,
  useUnclaimedNFTSupply,
} from '@thirdweb-dev/react';
import clsx from 'clsx';
import { AES, enc } from 'crypto-js';
import { formatUnits } from 'ethers/lib/utils';
import { useEffect, useState } from 'react';

import { MediaCard } from '@/components/blocks/Card';
import { config } from '@/config';

import { StageRow } from './StageRow';
import { useClasses } from './styles';
import { CustomNFT } from './types';

const quantity = 1;
const contractAddress = '0x585C26bf2997CFf362acAfb6256Bf2C43733A08d';

const MintingPage = () => {
  const { classes } = useClasses();
  const { contract, isLoading } = useContract(contractAddress, 'nft-drop');
  const address = useAddress();
  const claimConditions = useClaimConditions(contract);
  const activeClaimCondition = useActiveClaimConditionForWallet(contract, address || '');
  const unclaimedSupply = useUnclaimedNFTSupply(contract);
  const claimedSupply = useClaimedNFTSupply(contract);
  const { data: nfts, isLoading: isLoadingOwnedNfts } = useOwnedNFTs(contract, address);
  const { data: metadata, isLoading: isLoadingMetadata } = useMetadata(contract);

  const [image, setImage] = useState<string | undefined>(
    (metadata as CustomContractMetadata)?.image,
  );

  useEffect(() => {
    if (nfts && nfts[0]) {
      setImage(
        AES.decrypt((nfts[0] as CustomNFT).metadata.qr_code, config.secret).toString(enc.Utf8),
      );
    } else if (!isLoadingOwnedNfts && (metadata as CustomContractMetadata)?.image) {
      setImage((metadata as CustomContractMetadata)?.image);
    }
  }, [nfts, metadata, isLoadingOwnedNfts]);

  if (!image || isLoading || isLoadingMetadata || !unclaimedSupply.data || !claimedSupply.data) {
    return (
      <Box className={classes.page}>
        <CircularProgress className={classes.loading} />
      </Box>
    );
  }

  return (
    <Box className={classes.page}>
      <MediaCard
        image={image}
        title={(metadata as CustomContractMetadata)?.name}
        description={
          activeClaimCondition?.data ? `${formatUnits(activeClaimCondition?.data?.price)} ETH` : ''
        }
      />
      <Box className={clsx(classes.infoWrapper, classes.column)}>
        <Typography variant="h5" className={classes.title}>
          Unclaimed supply: {formatUnits(unclaimedSupply.data, 0)}
        </Typography>

        {claimConditions?.data?.map(
          ({
            availableSupply,
            metadata,
            price,
            startTime,
            maxClaimableSupply,
            maxClaimablePerWallet,
            currentMintSupply,
          }) => (
            <Paper key={startTime.toISOString()} className={classes.stageWrapper}>
              <Box>
                {activeClaimCondition?.data?.startTime?.toISOString() ===
                startTime.toISOString() ? (
                  <StageRow name={'Current stage'} value={metadata?.name} />
                ) : (
                  <StageRow name={'Stage'} value={metadata?.name} />
                )}
              </Box>
              <StageRow
                name={'Available supply'}
                value={availableSupply.length > 10 ? 'Unlimited' : availableSupply}
              />
              <StageRow name={'Price'} value={`${formatUnits(price)} ETH`} />
              <StageRow name={'Start time'} value={startTime.toISOString()} />
              <StageRow name={'Maximum'} value={maxClaimableSupply} />
              <StageRow name={'Max per wallet'} value={maxClaimablePerWallet} />
              <StageRow name={'Current mint supply'} value={currentMintSupply} />
            </Paper>
          ),
        )}

        <StageRow
          className={classes.title}
          name={'Claimed supply'}
          value={formatUnits(claimedSupply.data, 0)}
        />

        <Button
          variant="contained"
          size="large"
          onClick={() => contract?.erc721.claim(quantity)}
          disabled={!address}
        >
          {address ? 'Buy now' : 'Connect wallet'}
        </Button>
      </Box>
    </Box>
  );
};

export default MintingPage;
