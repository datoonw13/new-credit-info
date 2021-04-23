import * as SVG from 'assets/svg';
import {colors} from 'theme';

export const reportItems = [
  {
    id: 1,
    HeadingIcon: SVG.DownloadReport,
    headingIconBg: colors.strangeBlueOp1,
    ActionIcon: SVG.DownloadReportAction,
    heading: 'reports.download',
    description: 'reports.checkCreditHistory',
  },
  {
    id: 2,
    HeadingIcon: SVG.SendReport,
    headingIconBg: colors.strangeBlueOp2,
    ActionIcon: SVG.SendReportAction,
    heading: 'reports.sendReport',
    description: 'reports.sendReportToSomeone',
  },
];
