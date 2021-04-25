/* eslint-disable no-undef */
import {device, element, by, waitFor} from 'detox';

beforeAll(async () => {
  await device.installApp();
  await device.launchApp();
});

beforeEach(async () => {
  await device.reloadReactNative();
});

it('Auth screen should be visible', async () => {
  await waitFor(element(by.id('AuthScreen')))
    .toBeVisible()
    .withTimeout(2000);
});
