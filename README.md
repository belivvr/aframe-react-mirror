# A-Frame React Immersive Stereoscopic Video Component

![Belivvr logo](https://avatars.githubusercontent.com/u/40684200?s=200&v=4)

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

[![codecov](https://codecov.io/gh/belivvr/aframe-react-mirror/branch/main/graph/badge.svg?token=4G3GH0R2U5)](https://codecov.io/gh/belivvr/aframe-react-mirror)

## Languages

[한국어](./README/ko.md) | [English](./README/en.md)

---

## Introduce

This library is for using mirror in `aframe@1.2.0`.  
Get from [Three.js build-in Refractor](https://github.com/mrdoob/three.js/blob/r136/examples/jsm/objects/Refractor.js), and reference from [Reflector example](https://sbcode.net/threejs/reflector/).

## Install

Require to install [@belivvr/aframe-react](https://github.com/belivvr/aframe-react).

```sh
# yarn
yarn add aframe@1.2.0 @belivvr/aframe-react @belivvr/aframe-react-mirror

# npm
npm i aframe@1.2.0 @belivvr/aframe-react @belivvr/aframe-react-mirror
```

## Usage

### React

```tsx
import AFRAME from 'aframe';
import { Scene, Plain } from '@belivvr/aframe-react';
import {
  mirror,
  PlainMirror,
} from '@belivvr/aframe-react-mirror';

mirror(AFRAME); // Doing AFRAME.registerComponent in mirror function.

ReactDOM.render(
  (
    <Scene>
      <Plain mirror="width: 5; height: 20; position: 0 0 30;">
      <PlainMirror
        width={5}
        height={20}
        position={{ x: 0, y: 0, z: 20 }}
      />
    </Scene>
  ),
  document.getElementById('root'),
);
```

### Next.JS

Can't using `import AFRAME from 'aframe';` in Next.JS.  
Inevitably, we have no choice but to use `require`, and we have to check the completion of ssr through `useEffect` and then rendering.  

Since `aframe` uses the `window` object, check the window object through `typeof window !== 'undefined'` and call `aframe`.

```tsx
import type { NextPage } from 'next';

import React, { useEffect, useState } from 'react';
import { Scene, Plain } from '@belivvr/aframe-react';
import {
  mirror,
  PlainMirror,
} from '@belivvr/aframe-react-mirror';

const Home: NextPage = () => {
  const [rendered, setRendered] = useState<boolean>(false);

  useEffect(() => {
    setRendered(true);

    if (typeof window !== 'undefined') {
      const AFRAME = require('aframe'); // eslint-disable-line global-require
      mirror(AFRAME); // Doing AFRAME.registerComponent in stereoscopic function.
    }
  }, [mirror, setRendered]);

  if (!rendered) {
    return <>loading</>;
  }

  return (
    <Scene>
      <Plain mirror="width: 5; height: 20; position: 0 0 30;">
      <PlainMirror
        width={5}
        height={20}
        position={{ x: 0, y: 0, z: 20 }}
      />
    </Scene>
  );
};

export default Home;
```

## Options

### mirror

|name|description|default|
|:-|:-|:-|
|width|mirror width|5|
|height|mirror height|20|
|position|mirror position|0 0 20|

### PlainMirror

|name|description|default|
|:-|:-|:-|
|width|mirror width|5|
|height|mirror height|20|
|position|mirror position|`{ x: 0, y: 0, z: 20 }`|
