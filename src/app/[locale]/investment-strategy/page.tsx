import {
  CapitalDeployment,
  Explore,
  GeographicDiversification,
  InvestmentStrategyHero,
  RiskManagement,
  StrategicFlexibility,
  TargetPortfolio,
} from './components';

export default function InvestmentStrategy() {
  return (
    <div>
      <InvestmentStrategyHero />
      <CapitalDeployment />

      <TargetPortfolio />
      <RiskManagement />
      <GeographicDiversification />
      <StrategicFlexibility />
      <Explore />
    </div>
  );
}
