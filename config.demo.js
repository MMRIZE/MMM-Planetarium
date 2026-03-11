const config = {
	address: "localhost",
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"],
	logLevel: ["INFO", "LOG", "WARN", "ERROR", "DEBUG"],

	modules: [
		{
			module: "clock",
			position: "top_left",
			config: {
				displaySeconds: false
			}
		},
		{
			module: "MMM-Planetarium",
			position: "fullscreen_below",
			config: {
				width: "100vw",
				height: "100vh",
				latitude: 50.0836,  // Ihre Position
				longitude: 8.4694,
				constellations: true,
				showplanets: true,
				live: true,
				paninterval: 500,
				panoffset: -0.1
			}
		},
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") { module.exports = config; }
