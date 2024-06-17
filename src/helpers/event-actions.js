export async function saveEvent(eventId) {
  const response = await fetch(`${window.API_URL}/create_user_event/${window.USER_ID}/${eventId}/`, {
    headers: {
      'Authorization': window.AUTH_TOKEN
    }
  })

  return response
}

export async function removeEvent(eventId) {
  const response = await fetch(`${window.API_URL}/delete_user_event/${window.USER_ID}/${eventId}/`, {
    headers: {
      'Authorization': window.AUTH_TOKEN
    }
  })

  return response
}

export async function getFilteredEvents(days, locations, formats) {
  const queryParams = []

  if (days.length) {
    queryParams.push(`day=${days.join(',')}`)
  }

  if (locations.length) {
    queryParams.push(`location=${locations.join(',')}`)
  }

  if (formats.length) {
    queryParams.push(`type_event=${formats.join(',')}`)
  }

  const queryString = queryParams.join('&')

  const response = await fetch(`${window.API_URL}/event/?${queryString}`, {
    headers: {
      'Authorization': window.AUTH_TOKEN
    }
  })

  return response
}
