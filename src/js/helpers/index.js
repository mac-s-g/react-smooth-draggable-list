export const reinsert = (arr, from, to) => {
  const _arr = arr.slice(0)
  const val = _arr[from]
  _arr.splice(from, 1)
  _arr.splice(to, 0, val)
  return _arr
}

export const clamp = (n, min, max) => Math.max(Math.min(n, max), min)
