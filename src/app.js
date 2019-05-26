import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'
import './app.scss'

class App extends Component {

  config = {
    pages: [
      'pages/index/index',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#358BFC',
      navigationBarTitleText: '马上戒烟',
      navigationBarTextStyle: 'white'
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  render () {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
