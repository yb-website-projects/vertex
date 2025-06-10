import {
  AssetClass,
  GeographicDiversification,
  InvestmentStrategyHero,
  RiskManagement,
  StrategicFlexibility,
  StrategyInclude,
  TargetPortfolio,
} from './components';

export default function InvestmentStrategy() {
  return (
    <div>
      <InvestmentStrategyHero />
      <StrategyInclude />
      <TargetPortfolio />
      <AssetClass />
      <RiskManagement />
      <GeographicDiversification />
      <StrategicFlexibility />
    </div>
  );
}
