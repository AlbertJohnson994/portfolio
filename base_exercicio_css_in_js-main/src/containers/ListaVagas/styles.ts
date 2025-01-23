/* .vagas {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 16px;
  row-gap: 16px;
  margin-top: 32px;
}

@media (max-width: 768px) {
  .vagas {
    grid-template-columns: 1fr;
  }
} */

import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 32px;
`

export const VagasGrid = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 16px;
  row-gap: 16px;
  margin-top: 32px;
  list-style: none;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
