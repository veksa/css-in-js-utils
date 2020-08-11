type CacheObject = {
  [key: string]: string
}

const DASH = /-([a-z])/g
const MS = /^Ms/g
const cache: CacheObject = {}

function toUpper(match: string) {
  return match[1].toUpperCase()
}

export default function camelCaseProperty(property: string) {
  if (cache.hasOwnProperty(property)) {
    return cache[property]
  }

  const camelProp = property.replace(DASH, toUpper).replace(MS, 'ms')
  cache[property] = camelProp

  return camelProp
}
