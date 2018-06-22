import React from 'react'
import { withBaseIcon } from 'react-icons-kit'
import { home } from 'react-icons-kit/icomoon'
import { home2 } from 'react-icons-kit/icomoon'
import { home3 } from 'react-icons-kit/icomoon'

//lets say the icons on your side navigation are all color red
const SideIconContainer = withBaseIcon({ size: 30, style: { color: '#EF233C' } })

export const HomeIcon1 = () => <SideIconContainer icon={home} />
export const HomeIcon2 = () => <SideIconContainer icon={home2} />
export const HomeIcon3 = () => <SideIconContainer icon={home3} />
