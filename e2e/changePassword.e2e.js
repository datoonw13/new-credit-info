import React from 'react';

describe('ChangePassword', () => {
  it('should navigate to change password screen', async () => {
    await element(by.id('EmailInput')).replaceText('admin@gmail.com');
    await element(by.id('PasswordInput')).replaceText('111111');
    await element(by.id('SignInButton')).tap();
    await element(by.id('DrawerIcon')).tap();
    await element(by.id('ChangePassword')).tap();
    await expect(element(by.text('admin@gmail.com'))).toExist();
    await expect(element(by.id('OldPassword'))).toExist();
    await expect(element(by.id('NewPassword'))).toExist();
    await expect(element(by.id('RepeatNewPassword'))).toExist();
    await expect(element(by.id('changePasswordSubmit'))).toExist();
  });

  it('should show error message', async () => {
    await element(by.id('changePasswordSubmit')).tap();
    await expect(element(by.text('Old password must be at least 6 symbols'))).toBeVisible();
    await expect(element(by.text('Password must be at least 6 symbols'))).toBeVisible();
    await expect(element(by.text('Passwords do not match'))).toBeVisible();
  });

  it('should change the password', async () => {
    await element(by.id('OldPassword')).typeText('111111');
    await element(by.id('NewPassword')).typeText('111111');
    await element(by.id('RepeatNewPassword')).typeText('111111');
    await element(by.id('changePasswordSubmit')).tap();
    await expect(element(by.text('Password Changed Successfully'))).toExist();
  });
});
