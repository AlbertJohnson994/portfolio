// import styles from './Hero.module.css'

// const Hero = () => (
//   <form className={styles.form}>
//     <div className="container">
//       <h2 className={styles.heroTitle}>
//         As melhores vagas para tecnologia, design e artes visuais.
//       </h2>
//     </div>
//   </form>
// )

// export default Hero

import React from 'react'
import { FormStyled, ContainerStyled, HeroTitleStyled } from './styles'

const Hero = () => (
  <FormStyled>
    <ContainerStyled>
      <HeroTitleStyled>
        As melhores vagas para tecnologia, design e artes visuais.
      </HeroTitleStyled>
    </ContainerStyled>
  </FormStyled>
)

export default Hero
