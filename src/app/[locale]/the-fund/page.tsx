import {
  Explore,
  FundHero,
  FundPositioning,
  IdentityRegulatoryFramework,
  KeyFeatures,
} from './components';

export default function TheFund() {
  return (
    <>
      <FundHero />
      <IdentityRegulatoryFramework />
      <FundPositioning />
      <KeyFeatures />
      <Explore />
    </>
  );
}
