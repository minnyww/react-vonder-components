import React from 'react'
import { Button, Card, Divider } from 'antd'
import styled from 'styled-components'
import 'antd/dist/antd.css'

const CardImage = styled.img`
  width: 110px;
  height: 100px;
  object-fit: cover;
  border-radius: 15px;
`

const BaseCard = styled(Card)`
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.13);
  border-radius: ${(props) =>
    props.borderradius ? `${props.borderradius}px` : '0px'};
  margin-bottom: ${(props) =>
    props.marginbottom ? `${props.marginbottom}em` : '0em'};
`

const BaseButton = styled(Button)`
  background-color: ${(props) =>
    props.buttoncolor ? `${props.buttoncolor}` : ''};
  border: none;
  width: 100%;
`

export default React.memo(function VonderCardList({
  data,
  onClick,
  marginbetweencard,
  cardradius,
  buttoncolor
}) {
  return (
    <React.Fragment>
      {data.map((item, index) => (
        <BaseCard
          key={index}
          hoverable
          bordered
          borderradius={cardradius}
          marginbottom={marginbetweencard}
        >
          <CardImage src={item.imageUrl} alt='image_card' loading='lazy' />
          {item.name}
          <Divider />
          <BaseButton
            buttoncolor={buttoncolor}
            type='primary'
            onClick={() => onClick(item)}
          >
            View Detail
          </BaseButton>
        </BaseCard>
      ))}
    </React.Fragment>
  )
})
