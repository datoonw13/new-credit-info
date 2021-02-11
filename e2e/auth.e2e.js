import React from 'react';

describe('Auth', () => {
  beforeEach(async () => {
    // await device.reloadReactNative();
  });

  it('should show error message', async () => {
    await element(by.id('SignInButton')).tap();
    await expect(element(by.text('Please enter password'))).toBeVisible();
    await expect(element(by.text('Please enter valid email'))).toBeVisible();
  });

  it('should notify an auth error', async () => {
    await element(by.id('EmailInput')).typeText('admin1@gmail.com');
    await element(by.id('PasswordInput')).typeText('111111');
    await element(by.id('SignInButton')).tap();
    await expect(element(by.text('User not found.'))).toExist();
    await element(by.id('EmailInput')).replaceText('');
    await element(by.id('EmailInput')).typeText('admin@gmail.com');
    await element(by.id('PasswordInput')).replaceText('');
    await element(by.id('PasswordInput')).typeText('1111111');
    await element(by.id('SignInButton')).tap();
    await expect(element(by.text('Invalid password.'))).toExist();
  });

  it('should successfully sign in as admin', async () => {
    await element(by.id('EmailInput')).replaceText('');
    await element(by.id('EmailInput')).typeText('admin@gmail.com');
    await element(by.id('PasswordInput')).replaceText('');
    await element(by.id('PasswordInput')).typeText('111111');
    await element(by.id('SignInButton')).tap();
    await expect(element(by.text('admin'))).toExist();
    await expect(element(by.text('users'))).toExist();
    await expect(element(by.id('AddApartmentButton'))).toExist();
  });

  it('should successfully sign out', async () => {
    await element(by.id('DrawerIcon')).tap();
    await element(by.text('Log Out')).tap();
    await expect(element(by.id('EmailInput'))).toExist();
  });

  it('should successfully sign in as realtor', async () => {
    await element(by.id('EmailInput')).typeText('realtor@gmail.com');
    await element(by.id('PasswordInput')).typeText('111111');
    await element(by.id('SignInButton')).tap();
    // await element(by.id('DrawerIcon')).tap();
    // await expect(element(by.text('realtor'))).toExist();
    await expect(element(by.text('users'))).toNotExist();
    await expect(element(by.id('AddApartmentButton'))).toExist();
  });
});
