import React, { useEffect, useState } from 'react'

import ytdl from "react-native-ytdl"

import ShareExtension from 'react-native-share-extension'

import { Card } from './components'

import {
  Container
} from './styles'

import { FlatList } from 'react-native'

export default ({appState}) => {

  const [ data, setData ] = useState(null)

  useEffect( () => {

    if (appState !== 'active') return 

    ShareExtension.data().then( resp => {

      const videoID  = ytdl.getURLVideoID(resp.value) 

      ytdl.getInfo(videoID, {}, (err, info) => setData(info) )

    })

  }, [appState])


  return (
    <Container>

      {(data !== null ? <Card data={data} /> : null)}

    </Container>
  )

}