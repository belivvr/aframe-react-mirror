import React from 'react';
import { render } from '@testing-library/react';

import { MirrorEntity, PlaneMirror } from '../../src/react-component/Mirror';

describe('PlaneMirror', () => {
  context ('When gives no one', () => {
    it('Should render empty mirror properties a-plane tag', () => {
      const { container } = render(<PlaneMirror />);

      expect(container.innerHTML).toBe('<a-plane mirror="true"></a-plane>');
    });
  });

  context('When gives custom props', () => {
    it('Should render has custom props a-plane tag', () => {
      const { container } = render(<PlaneMirror custom="value1:true;value2:#sample;" />);

      expect(container.innerHTML).toBe('<a-plane mirror="true" custom="value1:true;value2:#sample;"></a-plane>');
    });
  });
});

describe('MirrorEntity', () => {
  context ('When gives no one', () => {
    it('Should render empty mirror properties a-entity tag', () => {
      const { container } = render(<MirrorEntity geometry={{ primitive: 'box' }} />);

      expect(container.innerHTML).toBe('<a-entity geometry="primitive:box;" mirror="true"></a-entity>');
    });
  });

  context('When gives custom props', () => {
    it('Should render has custom props a-entity tag', () => {
      const { container } = render(<MirrorEntity custom="value1:true;value2:#sample;" />);

      expect(container.innerHTML).toBe('<a-entity mirror="true" custom="value1:true;value2:#sample;"></a-entity>');
    });
  });
});
