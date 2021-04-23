import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {HeaderWithLogo, Text} from 'components';
import {ReportItem} from './components';
import {reportItems} from './config';

const Reports = () => {
  return (
    <View>
      <SafeAreaView />
      <HeaderWithLogo mode="WithMenu" />
      {reportItems.map(
        ({
          headingIconBg,
          HeadingIcon,
          description,
          ActionIcon,
          heading,
          id,
        }) => (
          <ReportItem
            headingIconBg={headingIconBg}
            HeadingIcon={HeadingIcon}
            description={description}
            ActionIcon={ActionIcon}
            heading={heading}
            key={id}
          />
        ),
      )}
    </View>
  );
};

export default Reports;
