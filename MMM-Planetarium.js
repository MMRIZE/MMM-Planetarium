// MagicMirror Module to display a planetarium in the MagicMirror.

Module.register("MMM-Planetarium", {
  defaults: {
    width: "100vw",
    height: "100vh",
    projection: 'stereo',
    latitude: 50.0836,
    longitude: 8.4694,
    az: 0,
    keyboard: false,
    constellations: true,
    constellationlabels: true,
    constellationwidth: 1,
    showplanets: true,
    showplanetlabels: true,
    showstarlabels: true,
    showdate: false,
    showposition: false,
    showgalaxy: true,
    live: true,
    meridian: true,
    gridlines_gal: true,
    showstartlabels: true,
    ground: true,
    transparent: true,
    cardinalpoints: true,
    credit: true, // This is just a manner.

    panoffset: -0.1,
    paninterval: 500, // 0 = no panning
  },

  start: function () {
    this.planetarium = null
    this.timer = null
  },

  getStyles: function () {
    return [
      this.file('./MMM-Planetarium.css')
    ]
  },

  getScripts: function () {
    return [
      this.file('./virtualsky/stuquery.min.js'),
      this.file('./virtualsky/virtualsky.min.js'),
    ]
  },

  getDom: function () {
    var wrapper = document.createElement("div")
    wrapper.id = "PLNTRM_" + this.identifier
    wrapper.className = "PLNTRM"
    wrapper.style.width = this.config.width
    wrapper.style.height = this.config.height
    return wrapper
  },

  notificationReceived: function (notification, payload, sender) {
    if (notification === 'MODULE_DOM_CREATED') {
      this.run()
    }
  },

  run: function () {
    const options = {
      ...this.config,
      id: "PLNTRM_" + this.identifier,
    }
    this.planetarium = S.virtualsky(options)
    
    if (this.config.paninterval > 0) {
      this.pan()
    }
  },

  pan: function () {
    clearTimeout(this.timer)
    this.planetarium.changeAzimuth(this.config.panoffset)
    this.timer = setTimeout(() => {
      this.pan()
    }, this.config.paninterval)
  }




})
