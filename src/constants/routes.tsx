import { lazy } from 'react';

const MintingPage = lazy(() => import('../components/pages/Minting'));

export enum RoutesNames {
  Minting = '/',
}

export const EmptyComponent = () => null;

export const routes = [{ name: RoutesNames.Minting, Component: MintingPage }];
