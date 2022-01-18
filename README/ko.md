# A-Frame React Immersive Stereoscopic Video Component

![Belivvr logo](https://avatars.githubusercontent.com/u/40684200?s=200&v=4)

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

[![codecov](https://codecov.io/gh/belivvr/aframe-react-mirror/branch/main/graph/badge.svg?token=4G3GH0R2U5)](https://codecov.io/gh/belivvr/aframe-react-mirror)

## Languages

[English](./en.md)

---

## Introduce

이 라이브러리는 `aframe@1.2.0` 에서 거울을 사용하기 위해 만들어졌습니다.  
[Three.js에 내장된 Refractor](https://github.com/mrdoob/three.js/blob/r136/examples/jsm/objects/Reflector.js)를 가져와서 [Reflector 예제 코드](https://sbcode.net/threejs/reflector/) 를 참고하여 컴포넌트를 제작했습니다.

## Install

이 라이브러리는 [@belivvr/aframe-react](https://github.com/belivvr/aframe-react)의 설치를 요구합니다.

```sh
# yarn
yarn add aframe@1.2.0 @belivvr/aframe-react @belivvr/aframe-react-mirror

# npm
npm i aframe@1.2.0 @belivvr/aframe-react @belivvr/aframe-react-mirror
```

## Usage

### React

```tsx
import 'aframe';
import { Scene, Plain } from '@belivvr/aframe-react';
import {
  registerMirror,
  Mirror,
} from '@belivvr/aframe-react-mirror';

registerMirror(); // Doing AFRAME.registerComponent in mirror function.

ReactDOM.render(
  (
    <Scene>
      <Mirror
        width={5}
        height={10}
        position={{ x: 0, y: 0, z: 20 }}
      />
      // 만약 뒷면을 가진 거울을 사용하고 싶으시다면
      // 아래 Mirror 컴포넌트도 사용하세요.
      <Mirror
        width={5}
        height={10}
        position={{ x: 0, y: 0, z: 19.999 }}
        rotation={{ x: 0, y: 180, z: 0 }}
      />
    </Scene>
  ),
  document.getElementById('root'),
);
```

### Next.JS

Next.JS 에서는 `import AFRAME from 'aframe';` 을 할 수가 없습니다.  
불가피하게 `require` 를 사용할 수 밖에 없고, `useEffect` 를 통해 ssr 완료를 확인 후 랜더링을 해야합니다.  

`aframe` 이 `window` 객체를 사용하기 때문에 `typeof window !== 'undefined'` 를 통해 window 객체를 확인 후 `aframe` 을 불러옵니다.

```tsx
import type { NextPage } from 'next';

import React, { useEffect, useState } from 'react';
import { Scene, Plain } from '@belivvr/aframe-react';
import {
  registerMirror,
  Mirror,
} from '@belivvr/aframe-react-mirror';

const Home: NextPage = () => {
  const [rendered, setRendered] = useState<boolean>(false);

  useEffect(() => {
    setRendered(true);

    if (typeof window !== 'undefined') {
      require('aframe'); // eslint-disable-line global-require
      registerMirror(); // Doing AFRAME.registerComponent in stereoscopic function.
    }
  }, [mirror, setRendered]);

  if (!rendered) {
    return <>loading</>;
  }

  return (
    <Scene>
      <Mirror
        width={5}
        height={10}
        position={{ x: 0, y: 0, z: 20 }}
      />
      // 만약 뒷면을 가진 거울을 사용하고 싶으시다면
      // 아래 Mirror 컴포넌트도 사용하세요.
      <Mirror
        width={5}
        height={10}
        position={{ x: 0, y: 0, z: 19.999 }}
        rotation={{ x: 0, y: 180, z: 0 }}
      />
    </Scene>
  );
};

export default Home;
```

## Options

|name|description|default|
|:-|:-|:-|
|width|거울 가로|5|
|height|거울 세로|20|
|position|거울 위치|`{ x: 0, y: 0, z: 20 }`|
