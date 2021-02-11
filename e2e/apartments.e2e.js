import React from 'react';

describe('Apartments', () => {

  it('should navigate to apartment add screen', async () => {
    await element(by.id('EmailInput')).replaceText('realtor@gmail.com');
    await element(by.id('PasswordInput')).replaceText('111111');
    await element(by.id('SignInButton')).tap();
    await element(by.id('AddApartmentButton')).tap();
    await expect(element(by.id('SubmitAddApartment'))).toExist();
  });

  it('should show error', async () => {
    await waitFor(element(by.id('SubmitAddApartment'))).toBeVisible().whileElement(by.id('AddScrollView')).scroll(50);
    await element(by.id('SubmitAddApartment')).tap();
    await expect(element(by.text('Please enter name'))).toExist();
  });

  it('should create apartment', async () => {
    await waitFor(element(by.id('ApartmentNameInput'))).toBeVisible().whileElement(by.id('AddScrollView')).scroll(-50);
    await element(by.id('ApartmentNameInput')).replaceText('Apartment by test');
    await element(by.id('ApartmentFloorInput')).replaceText('1');
    await element(by.id('ApartmentAreaInput')).replaceText('1');
    await element(by.id('ApartmentPriceInput')).replaceText('1');
    await element(by.id('ApartmentNOFInput')).replaceText('1');
    await element(by.id('ApartmentDescriptionInput')).replaceText('Desc');
    await waitFor(element(by.id('SubmitAddApartment'))).toBeVisible().whileElement(by.id('AddScrollView')).scroll(50);
    await element(by.id('SubmitAddApartment')).tap();
    await expect(element(by.text('Please set coordinates'))).toBeVisible();
    await element(by.id('SelectOnMapButton')).tap();
    await expect(element(by.id('MapView'))).toExist();
    await element(by.id('MapView')).tap();
    await element(by.id('SubmitCoordinates')).tap();
    await waitFor(element(by.id('SubmitAddApartment'))).toBeVisible().whileElement(by.id('AddScrollView')).scroll(50);
    await element(by.id('SubmitAddApartment')).tap();
    await expect(element(by.text('Apartment created successfully'))).toExist();
  });

  it('should show apartment detail page', async () => {
    await element(by.id('ApartmentListItem0')).tap();
    await expect(element(by.id('ApartmentDetailContainer'))).toExist();
  });

  it('should update apartment', async () => {
    await expect(element(by.id('UpdateApartment'))).toExist();
    await element(by.id('UpdateApartment')).tap();
    await expect(element(by.id('SubmitUpdateApartment'))).toExist();
    await waitFor(element(by.id('UpdateApartmentRented')))
      .toBeVisible()
      .whileElement(by.id('UpdateScrollView'))
      .scroll(50);
    await element(by.id('UpdateApartmentRented')).tap();
    await waitFor(element(by.id('SubmitUpdateApartment')))
      .toBeVisible()
      .whileElement(by.id('UpdateScrollView'))
      .scroll(50);
    await element(by.id('SubmitUpdateApartment')).tap();
    await expect(element(by.text('Apartment updated successfully'))).toExist();
  });

  it('should delete apartment', async () => {
    await element(by.text('Apartment updated successfully')).tap();
    await expect(element(by.id('DeleteApartment'))).toExist();
    await element(by.id('DeleteApartment')).tap();
    await element(by.text('OK')).tap();
    await expect(element(by.text('Apartment deleted successfully'))).toExist();
  });
});
