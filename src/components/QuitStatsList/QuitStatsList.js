import Taro, { Component } from '@tarojs/taro'
import { View , Text } from '@tarojs/components'
import './QuitStatsList.scss'

export default class QuitStatsList extends Component {

  render() {
    return (
      <View className='quitstats-list'>
        <View className='list-item'>
            <View className='container'>
                <View className='content'>无烟天数</View>
                <View className='extra'>5天,15:18</View>
            </View>
        </View>
        <View className='list-item'>
            <View className='container'>
                <View className='content'>少抽香烟数</View>
                <View className='extra'>56</View>
            </View>
        </View>
        <View className='list-item'>
            <View className='container'>
                <View className='content'>节省金钱</View>
                <View className='extra'>￥ 42</View>
            </View>
        </View>
        <View className='list-item'>
            <View className='container'>
                <View className='content'>节省时间</View>
                <View className='extra'>05:36</View>
            </View>
        </View>
      </View>
    )
  }

}