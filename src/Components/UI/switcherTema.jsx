import React from 'react'
import { Icone } from '.'
import ThemeOff from '../../assets/images/themeOff.svg'
import ThemeOn from '../../assets/images/themeOn.svg'

const claro = <Icone src={ThemeOff} alt="Tema Claro" />
const escuro = <Icone src={ThemeOn} alt="Tema Escuro" />

export default ({ tema }) => (tema ? escuro : claro)
