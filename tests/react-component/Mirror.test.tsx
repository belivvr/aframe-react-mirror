import React from 'react';
import { render } from '@testing-library/react';

import Mirror from '../../src/react-component/Mirror';

describe('Mirror', () => {
  context ('When gives no one', () => {
    it('Should render has default position and empty mirror properties a-plane tag', () => {
      const { container } = render(<Mirror />);

      expect(container.innerHTML).toBe('<a-plane position="0 0 20" mirror=""></a-plane>');
    });
  });

  context ('When gives position', () => {
    it('Should render has given position and empty mirror properties a-plane tag', () => {
      const { container } = render(<Mirror position={{ x: 0, y: 0, z: 0 }} />);

      expect(container.innerHTML).toBe('<a-plane position="0 0 0" mirror=""></a-plane>');
    });
  });

  context ('When gives width', () => {
    it('Should render has default position and width mirror properties a-plane tag', () => {
      const { container } = render(<Mirror width={1} />);

      expect(container.innerHTML).toBe('<a-plane position="0 0 20" mirror="width:1;"></a-plane>');
    });
  });

  context ('When gives height', () => {
    it('Should render has default position and height mirror properties a-plane tag', () => {
      const { container } = render(<Mirror height={1} />);

      expect(container.innerHTML).toBe('<a-plane position="0 0 20" mirror="height:1;"></a-plane>');
    });
  });

  context ('When gives width and height', () => {
    it('Should render has default position and width, height mirror properties a-plane tag', () => {
      const { container } = render(<Mirror width={1} height={1} />);

      expect(container.innerHTML).toBe('<a-plane position="0 0 20" mirror="width:1;height:1;"></a-plane>');
    });
  });

  context('When gives custom props', () => {
    it('Should render has custom props a-plane tag', () => {
      const { container } = render(<Mirror custom="value1:true;value2:#sample;" />);

      expect(container.innerHTML).toBe('<a-plane position="0 0 20" mirror="" custom="value1:true;value2:#sample;"></a-plane>');
    });
  });
});
