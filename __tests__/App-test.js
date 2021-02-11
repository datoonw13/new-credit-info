/**
 * @format
 */

import 'react-native';
import React from 'react';
// Note: test renderer must be required after react-native.
// import renderer from 'react-test-renderer';
import ApartmentsHeader from '../src/components/ApartmensHeader';
import { render } from '@testing-library/react-native';

test('test', () => {
  const role = 'realtor';
  const addHandlerMock = jest.fn();
  const filterHandlerMock = jest.fn();
  const refreshHandlerMock = jest.fn();

  const data = render(
    <ApartmentsHeader addHandler={addHandlerMock} filterHandler={filterHandlerMock}
                      refreshHandler={refreshHandlerMock} role={role} />,
  );

  const addButton = data.getByTestId('AddApartmentButton');
  console.log(addButton);
});
