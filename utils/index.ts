export const getTime = () => {
  return new Date().toLocaleString('en-US', {
    timeZone: 'Europe/Warsaw',
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  })
}
