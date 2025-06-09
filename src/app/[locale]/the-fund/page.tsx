import { Explore } from './components/Explore/Explore';
import { FundHero } from './components/FundHero/FundHero';
import { FundPositioning } from './components/FundPositioning/FundPositioning';
import { IdentityRegulatoryFramework } from './components/IdentityRegulatoryFramework/IdentityRegulatoryFramework';
import { KeyFeatures } from './components/KeyFeatures/KeyFeatures';

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
