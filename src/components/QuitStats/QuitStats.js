import Taro, { Component } from '@tarojs/taro'
import { View , Text } from '@tarojs/components'
import { AtAvatar } from 'taro-ui'
import { QuitStatsList } from '../QuitStatsList/QuitStatsList'
import './QuitStats.scss'

export default class QuitStats extends Component {

  render() {
    return (
      <View className='at-row'>
        <View className='at-col at-col-3'>
            <AtAvatar openData={{type:'userAvatarUrl'}} circle></AtAvatar>
        </View>
        <View className='at-col at-col-9'>
            <QuitStatsList />
        </View>
      </View>
    )
  }

}