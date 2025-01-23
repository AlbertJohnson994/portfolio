// import { FormEvent, useState } from 'react'

// import styles from './FormVagas.module.css'

// type Props = {
//   aoPesquisar: (termo: string) => void
// }

// const FormVagas = ({ aoPesquisar }: Props) => {
//   const [termo, setTermo] = useState<string>('')

//   const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault()
//     aoPesquisar(termo.toLocaleLowerCase())
//   }

//   return (
//     <form className={styles.form} onSubmit={aoEnviarForm}>
//       <input
//         className={styles.campo}
//         placeholder="Front-end, fullstack, node, design"
//         onChange={(e) => setTermo(e.target.value)}
//         type="search"
//       />
//       <button className={styles.btnPesquisar} type="submit">
//         Pesquisar
//       </button>
//     </form>
//   )
// }
// export default FormVagas

import { FormEvent, useState } from 'react'
import { FormStyled, InputStyled, ButtonStyled } from './styles'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <FormStyled onSubmit={aoEnviarForm}>
      <InputStyled
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <ButtonStyled type="submit">Pesquisar</ButtonStyled>
    </FormStyled>
  )
}

export default FormVagas
