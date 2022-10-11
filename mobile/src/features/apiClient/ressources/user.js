export async function _getUserByEmail(email) {
  const { data } = await server.get(`/api/auth/${email}`)

  return data?.user
}

export async function _registerUser(email, password) {
  const { data } = await server.post('/api/auth', {
    email,
    password
  })

  return data?.user
}
