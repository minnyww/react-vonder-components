# react-vonder-components

> vonder thailand

[![NPM](https://img.shields.io/npm/v/react-vonder-components.svg)](https://www.npmjs.com/package/react-vonder-components) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-vonder-components
```

## Usage

```jsx
import React from 'react'

import VonderCardList from 'react-vonder-components'

function App() {
  const LIST = [
    {
      item: '1',
      name: 'vonder',
      imageUrl:
        'https://d3vlf99qeg6bpx.cloudfront.net/content/uploads/2019/12/27122731/GettyImages.1196073144.jpg'
    },
    {
      item: '1',
      name: 'vonder2',
      imageUrl:
        'https://en.as.com/en/imagenes/2020/04/15/football/1586938317_820731_noticia_normal.jpg'
    }
  ]
  return (
    <VonderCardList
      buttoncolor='string' //#60d884
      cardradius={15} //px
      marginbetweencard={1} //em
      data={LIST} //array
      onClick={} //function
    />
  )
}
```

## License

MIT © [minnyww](https://github.com/minnyww)
