import React, { useEffect, useState } from 'react'

const formatDateTime = (date) => {
  const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']
  const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']

  const dayName = days[date.getDay()]
  const monthName = months[date.getMonth()]
  const day = date.getDate()

  let hours = date.getHours()
  const minutes = date.getMinutes().toString().padStart(2, '0')
  const period = hours >= 12 ? 'pm' : 'am'

  hours = hours % 12
  if (hours === 0) hours = 12

  return `${dayName} ${monthName} ${day} ${hours}:${minutes}${period}`
}

const DateTime = () => {
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return <div>{formatDateTime(now)}</div>
}

export default DateTime
