lastEvent = undefined

eventType = (event) ->
  return false if not event
  type = event.type
  if type.indexOf(':') > -1
    type.split(':')[0]
  else
    type.match(/[A-Z]?[a-z]+|[0-9]+/g)[0]

loadState = (event) ->
  lastEvent = eventType event
  Pace.restart()

doneState = (event) ->
  if eventType(event) == lastEvent
    lastEvent = undefined
    $('#main').hide()
    Pace.restart()
    Pace.on('done', ->
      $('#main').fadeIn()
      $(window).trigger 'resize'
    )

$(document).on 'page:fetch', (event) ->
  loadState event
$(document).on 'page:change', (event) ->
  doneState event
