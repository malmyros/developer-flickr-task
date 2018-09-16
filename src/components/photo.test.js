import React from 'react';
import { shallow } from 'enzyme';
import Photo from './photo';
import { LARGE } from '../model/viewType';

describe('photo', () => {
  it('should render without crashing', () => {
    const component = shallow(<Photo id={'1'}
                                     farm={0}
                                     title={'photo 1'}
                                     viewType={LARGE}/>);
    expect(component).toMatchSnapshot();
  });
});
