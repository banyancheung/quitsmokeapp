import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { QuitStats } from '../../components/QuitStats/QuitStats'
import './index.scss'

export default class Index extends Component {

  config = {
    navigationBarTitleText:'马上戒烟'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View>
        <QuitStats />
      </View>
    )
  }
}
