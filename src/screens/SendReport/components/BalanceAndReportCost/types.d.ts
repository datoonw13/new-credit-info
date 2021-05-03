type BalanceAndReportCostProps = {
  balance: number;
  sendReportCost: number;
};

interface BalanceAndReportCostFC {
  (props: BalanceAndReportCostProps): JSX.Element;
}
