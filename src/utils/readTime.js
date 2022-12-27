export function readTime(text) {
  if(!text.match(/\[([^\>]+)\]/)) return '1m read time'
  const chars = text.match(/\[([^\>]+)\]/)[1].match(/\d/g).join('')
  const charsPerMinute = 2000
  const minutes = Math.round( Number(chars) / charsPerMinute )

  return minutes <= 1 ? '1m read time' : `${minutes}m read time`
}
