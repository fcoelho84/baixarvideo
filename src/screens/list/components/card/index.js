import React, { useState } from 'react'

import ShareExtension from 'react-native-share-extension'

import dManager from 'react-native-simple-download-manager'

import ytdl from "react-native-ytdl"

import RNFetchBlob from 'rn-fetch-blob'


import {
    Container,
    Img,
    Status,
    Buttom,
    ButtomText,
    Title
} from './styles'


export const Card = ({ data }) => {


    const {
        video_id,
        title,
        description
    } = data

    const getDataToDownload = async ({ formats }, type) => await ytdl.filterFormats(formats, type).pop()

    const download = (url, config) => 
        RNFetchBlob.config(config).fetch('GET', url)
            .then((res) => RNFetchBlob.fs.scanFile([ { path : res.path(), mime : config.mime } ]))

    const startDownloading = (url, mime, ext) => {

        let dirs = RNFetchBlob.fs.dirs

        const config = {
            fileCache : true,
            path: dirs.DownloadDir + `/${title}.${ext}`,
            addAndroidDownloads : {
                title: `${title}.${ext}`,
                useDownloadManager : true,
                notification: true,
                mime,
                description
            }
        }

        download(url, config)

        ShareExtension.close()

    }

    const handleAction = async type => {

        const resp = await getDataToDownload(data, type)

        startDownloading(resp.url, resp.mimeType.split(";")[0], resp.container)

    }

    return (
        <Container>

            <Img source={ { uri: `https://img.youtube.com/vi/${video_id}/hqdefault.jpg`} } />


            <Title>{title}</Title>

            <Buttom onPress={ () => handleAction('audioandvideo')} >
                <ButtomText>Baixar vídeo</ButtomText>
            </Buttom>

            <Buttom onPress={ () => handleAction('audioonly')} >
                <ButtomText>Baixar somente áudio</ButtomText>
            </Buttom>

                
        </Container>
    )
}