import { Colors } from 'components/UI_KIT/colors'
import { Pane } from 'evergreen-ui'
import React from 'react'
import { SocialIcon } from 'react-social-icons'

export default function SocialMediaIcons() {
  const style = { marginRight: '1rem' }
  return (
    <Pane display='flex' marginTop='1rem'>
      <SocialIcon 
        url='https://twitter.com/Poseidon_SF/' 
        target="_blank" 
        bgColor={Colors.blue.clear}
        fgColor="#FFF"
        style={style}
      />
      <SocialIcon 
        url="https://discord.gg/gUsX8MpTqk" 
        target="_blank" 
        bgColor={Colors.blue.clear}
        fgColor="#FFF"
        style={style}
      />
      <SocialIcon
        type='instagram'
        url="https://instagram.com/poseidondao"
        target="_blank" 
        bgColor={Colors.blue.clear}
        fgColor="#FFF"
        style={style}
      />
      <SocialIcon
        type='github' 
        url="https://github.com/Poseidon-DAO" 
        target="_blank" 
        bgColor={Colors.blue.clear}
        fgColor="#FFF"
        style={style}
      />
    </Pane>
  )
}
