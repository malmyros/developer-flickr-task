import React from 'react';
import { shallow } from 'enzyme';
import ChangeViewType from './changeViewType';
import { THUMBNAIL } from '../model/viewType';

describe('change view type', () => {
  it('should render without crashing', () => {
    const mockedCallback = jest.fn();
    const component = shallow(<ChangeViewType viewType={THUMBNAIL}
                                              onChangeViewType={mockedCallback}/>);
    expect(component).toMatchSnapshot();
  });
});
