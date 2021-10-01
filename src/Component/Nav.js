import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../action';
import { Container, Headers, Button} from '../Styled-Component/styling';
const Nav = ({theme}) => {
  const dispatch = useDispatch()

  console.log(theme)
  return (

    <Container height="20vhvh"  theme={theme}>
    <Headers>BlockBusters</Headers>
    <Button onClick={() => dispatch(toggleTheme(!theme))}>Change Theme</Button>
    </Container >
  )
}

export default Nav
