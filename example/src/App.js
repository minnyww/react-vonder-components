import React from 'react'

import VonderCardList from 'react-vonder-components'

const App = () => {
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
    <div style={{ margin: '18px' }}>
      <VonderCardList
        buttoncolor='#60d884' //#60d884
        cardradius={15} //px
        marginbetweencard={1} //em
        data={LIST} //array
        onClick={(event) => console.log(event)}
      />
    </div>
  )
}

export default App
