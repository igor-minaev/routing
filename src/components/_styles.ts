import styled from 'styled-components';

const NavWrapper = styled.div`
  font-size: 20px;

  & > a {
    text-decoration: none;
    color: #6ac291;
  }

  & > a.active {
    text-decoration: underline;
    color: #084823;
  }

  & > a:hover {
    color: #0cd05f;
  }
`

const ImgWrapper = styled.img`
  width: 250px;
  height: 150px;
  object-fit: cover
`

export const S = {
    NavWrapper,
    ImgWrapper
}