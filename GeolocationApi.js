function geoFindMe (e) {
  e.preventDefault()
  const status = document.querySelector('#status')
  const mapIframe = document.querySelector('#map-iframe')
  const geo = navigator.geolocation
  mapIframe.innerHTML = ''
  if (!geo) {
    status.textContent = 'Geolocation is not supported by your browser'
  } else {
    status.textContent = 'Locating…'
    geo.getCurrentPosition(success, error)
  }

  function success (position) {
    const latitude = position.coords.latitude
    const longitude = position.coords.longitude

    status.textContent = ''

    const mapUrl = `https://maps.googleapis.com/maps/api/js?key=AIzaSyANvfkYf6XDIxRiG24Oud5VUDvvMyVp9WI&q=${latitude},${longitude}`
    mapIframe.innerHTML = `<iframe src=' ${mapUrl}' width= 500  height= 500></iframe>`
  }

  function error () {
    status.textContent = 'Unable to retrieve your location'
  }
}

document.querySelector('#find-me').addEventListener('click', geoFindMe)
