if isiActive is not active and not seen
  #sidebar height = 66px
  footer margin-bottom = 66px

if isiSeen
  #sidebar height = 33px
  footer margin-bottom = 33px

sidebar or arrow onclick
  isiActive = !isiActive
  headerActive = false

  if sidebar is active
    #sidebar height = window.innerHeight - $('.header-pad').outerHeight()
    #sidebar min-height = window.innerHeight - $('.header-pad').outerHeight()
    #sidebar max-height = 4000
    isiSeen = !isiSeen || isiSeen
    #sidebar scrollTop(0)

  if sidebar is not active
    #sidebar height = 33px
    #sidebar min-height = 33px
    footer margin-bottom = 33px

if sidebar is active
  #sidebar height = window.innerHeight - $('.header-pad').outerHeight()

isiActive = !headerActive, headerActive = !isiActive
  $('#header').removeClass('show-nav');