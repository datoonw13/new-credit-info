import React from 'react';

describe('SignUp', () => {
  it('should navigate to sign up screen', async () => {
    await element(by.id('SignUpButton')).tap();
    await expect(element(by.id('RegisterButton'))).toBeVisible();
  });

  it('should show error message', async () => {
    await element(by.id('RegisterButton')).tap();
    await expect(element(by.text('Password must be at least 6 symbols'))).toBeVisible();
    await expect(element(by.text('Please enter valid email'))).toBeVisible();
    await expect(element(by.text('Passwords do not match'))).toBeVisible();
  });

  it('should notify an error', async () => {
    await element(by.id('RegisterEmail')).typeText('client@gmail.com');
    await element(by.id('RegisterPassword')).typeText('111111');
    await element(by.id('RegisterRepeatPassword')).typeText('111111');
    await element(by.id('RegisterButton')).tap();
    await expect(element(by.text('Email is already in use!'))).toExist();
  });

  it('should sign up a user', async () => {
    await element(by.id('RegisterEmail')).replaceText('');
    await element(by.id('RegisterEmail')).typeText('client11@gmail.com');
    await element(by.id('RegisterPassword')).replaceText('');
    await element(by.id('RegisterPassword')).typeText('111111');
    await element(by.id('RegisterRepeatPassword')).replaceText('');
    await element(by.id('RegisterRepeatPassword')).typeText('111111');
    await element(by.id('RegisterButton')).tap();
    await expect(element(by.text('User was registered successfully!'))).toExist();
    await expect(element(by.id('SignUpButton'))).toExist();
  });

  it('should successfully sign in as client', async () => {
    await element(by.id('EmailInput')).typeText('client11@gmail.com');
    await element(by.id('PasswordInput')).typeText('111111');
    await element(by.id('SignInButton')).tap();
    await expect(element(by.text('client11'))).toExist();
    await expect(element(by.text('users'))).toNotExist();
    await expect(element(by.id('AddApartmentButton'))).toNotExist();
  });
});
