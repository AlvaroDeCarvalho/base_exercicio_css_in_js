import styled from 'styled-components'
export const ContainerVaga = styled.li`
  border: 1px solid ${(props) => props.theme.corPrincipal};
  background-color: ${(props) => props.theme.corSecundaria};
  color: ${(props) => props.theme.corPrincipal};
  padding: 16px;
  transition: all ease 0.3s;
  border-radius: 8px;
`

export const VagaTitulo = styled.h3`
  font-weight: bold;
  margin-bottom: 16px;
`
export const VagaLink = styled.a`
  border-color: ${(props) => props.theme.corPrincipal};
  background-color: ${(props) => props.theme.corPrincipal};
  color: ${(props) => props.theme.corSecundaria};
  display: inline-block;
  padding: 8px 16px;
  text-decoration: none;
  margin-top: 16px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  text-align: center;

  @media (max-width: 768px) {
    display: block;
  }
`
export const ContainerVagaHover = styled(ContainerVaga)`


    &:hover a{
      background-color: ${(props) => props.theme.corPrincipal};
    color:${(props) => props.theme.corSecundaria};
    border-color: ${(props) => props.theme.corPrincipal};
    background-color:${(props) => props.theme.corSecundaria};
    color: ${(props) => props.theme.corPrincipal};
    }
  }
`
