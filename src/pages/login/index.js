import React, { Component } from 'react'
import { View, Image } from '@tarojs/components'
// import { AtButton } from 'taro-ui'

//import "taro-ui/dist/style/components/button.scss" // 按需引入
import './index.css'
import img from './images/login.png'


export default class Index extends Component {

    componentWillMount() { }

    componentDidMount() { }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }

    render() {
        return (
            <View className='index'>
                <View className='bc_ground'>
                    <Image src={img}></Image>
                </View>
            </View>
        )
    }
}