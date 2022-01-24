import React from 'react';
import type { EntityProps } from '@belivvr/aframe-react/types/core';
import {
  Entity,
  Plane,
} from '@belivvr/aframe-react';

export function MirrorEntity(props: EntityProps): JSX.Element {
  return <Entity mirror {...props} />;
}

export function PlaneMirror(props: EntityProps): JSX.Element {
  return <Plane mirror {...props} />;
}
