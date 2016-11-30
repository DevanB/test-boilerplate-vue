## Application Wide

- [ ] Move actions into store/index.js
      - [ ] TOGGLE_ISI
      - [ ] TOGGLE_NAVIGATION
- [ ] Change mutation types, action names to UPPERCASE
- [ ] Extract Navigation to external file
- [ ] Add vue-helmet or vue-meta
- [ ] Add a polyfill for promises on IE9+

## Sidebar / ISI

- [x] sidebar or arrow onclick
        isiActive = !isiActive
- [x] if sidebar is active
        #sidebar height = windowHeight - document.querySelectorAll('.header-pad').offsetHeight
        #sidebar min-height = windowHeight - document.querySelectorAll('.header-pad').offsetHeight
        #sidebar max-height = 4000
        isiSeen = !isiSeen || isiSeen
        #sidebar scrollTop(0)
- [ ] Add animations to ISI opening/closing
- [x] Add animation of arrow rotating

----------------------------------------------------------------------------------------
## Footer

- [x] if isiActive is not active and not seen
  footer margin-bottom = 66px
- [x] if isiSeen
  footer margin-bottom = 33px

----------------------------------------------------------------------------------------
## Header

- [ ] isiActive = !headerActive, headerActive = !isiActive
        #header remove 'show-nav' class
- [ ] Fix logo top and background color
- [ ] .header-pad height = 
      .header-pad height = '.bar-util'.outerHeight() + '#header .logo'.outerHeight() + 12

----------------------------------------------------------------------------------------
## Navigation



----------------------------------------------------------------------------------------
## NotFound

- [ ] Add scoped styles

----------------------------------------------------------------------------------------
## UtilityLinks