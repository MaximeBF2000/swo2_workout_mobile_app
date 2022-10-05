const generateId = () =>
  parseFloat(Math.random().toString().slice(2)).toString(36)

export const genId = (len = 2) => {
  let id = ''
  for (let i = 0; i < len; i++) id += generateId()
  return id
}

export const hasUpper = str => str.toLowerCase() !== str

export const hasLower = str => str.toUpperCase() !== str

export const hasNumber = str => /\d/.test(str)

export const isEmail = str => {
  return str
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
}
