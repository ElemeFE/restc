module.exports = (response, reply, sendCallBack) => {
  return Object.create(response, {
    end: {
      value: payload => {
        sendCallBack(payload)
      }
    },

    setHeader: {
      value: (k, v) => {
        if (typeof response.header === 'function') {
          response.header(k, v)
        }
      }
    }
  })
}
