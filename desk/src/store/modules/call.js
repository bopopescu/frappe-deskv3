async function call(method, data) {
  if (!data) {
    data = {}
  }

  data.cmd = method

  const res = await fetch('/', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify(data),
  })

  if (res.ok) {
    const data = await res.json()
    if (data.docs) {
      return data
    }
    return data.message
  } else {
    const data = await res.json()
    if (data.exc) {
      const error = JSON.parse(data.exc)
      console.error(error[0]) // eslint-disable-line
    }
  }
}

export default {
  methods: {
    call,
  },
}
