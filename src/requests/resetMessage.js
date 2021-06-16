/*
 * @Descripttion: 限制elementUI message多条消息提示共存的问题，页面中始终只会存在一个消息提示
 * @Author: huangtaotao
 * @Date: 2020-08-18 14:58:51
 * @LastEditTime: 2020-09-24 11:23:09
 */

import {
  Message
} from 'element-ui'

let messageInstance = null
const resetMessage = (options) => {
  if(messageInstance) {
    messageInstance.close()
  }
  // Message 距离窗口顶部的偏移量
  options.offset = 60

  messageInstance = Message(options)
};
['error', 'success', 'info', 'warning'].forEach(type => {
  resetMessage[type] = options => {
    if(typeof options === 'string') {
      options = {
        message: options
      }
    }
    options.type = type
    return resetMessage(options)
  }
})
export default resetMessage
