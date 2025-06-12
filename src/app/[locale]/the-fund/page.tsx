import {
  Explore,
  FundHero,
  FundPositioning,
  IdentityRegulatoryFramework,
  KeyFeatures,
  TeamRepresentatives,
} from './components';

export default function TheFund() {
  return (
    <>
      <FundHero />
      <IdentityRegulatoryFramework />
      <TeamRepresentatives />
      <FundPositioning />
      <KeyFeatures />
      <Explore />
    </>
  );
}
