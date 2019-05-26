import Taro, { Component } from '@tarojs/taro'
import { View , Text } from '@tarojs/components'
import { AtAvatar } from 'taro-ui'
import './QuitStatsAvatar.scss'

export default class QuitStatsAvatar extends Component {

  render() {
    return (
        <View className='quitstats-avatar'>
            <View className='avatar-box'>
                <AtAvatar openData={{type:'userAvatarUrl'}} circle></AtAvatar>
            </View>
            <View className='quit-date'>
                <View className='date'><Text>2019年5月20日</Text></View>
                <View className='desc'><Text>你的戒烟日</Text></View>
            </View>
        </View>
    )
  }

}