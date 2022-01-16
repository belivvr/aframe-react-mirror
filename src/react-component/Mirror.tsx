import React from 'react';
import { Plane } from '@belivvr/aframe-react';
import type { EntityProps } from '@belivvr/aframe-react/types/core';

const POSITION = { x: 0, y: 0, z: 20 };

interface Props {
  width?: number;
  height?: number;
}

export default function PlainMirror(props: Props & EntityProps): JSX.Element {
  const { width, height } = props;

  return (
    <Plane
      position={POSITION}
      mirror={
        `${width ? `width:${width};` : ''}`
      + `${height ? `height:${height};` : ''}`
      }
      {...{ ...props, width: undefined, height: undefined }}
    />
  );
}
