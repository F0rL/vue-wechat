let url = {
  chat: '/chat',
  friendsList: '/friends'
}

const host = ' https://easy-mock.com/mock/5c98db81a225453d6e1be0c6/wechat'
for (let key in url) {
  if(url.hasOwnProperty(key)) {
    url[key] = host + url[key]
  }
}
export default url
