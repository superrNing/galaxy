const isProd = process.env.NODE_ENV === "production";

const contentData = [
  {
    title: "Star",
    herf: "/detail/Star",
    desc: "A star is an astronomical object comprising a luminous spheroid of plasma held together by self-gravity. The nearest star to Earth is the Sun. Many other stars are visible to the naked eye at night; their immense distances from Earth make them appear as fixed points of light. The most prominent stars have been categorised into constellations and asterisms, and many of the brightest stars have proper names. Astronomers have assembled star catalogues that identify the known stars and provide standardized stellar designations. The observable universe contains an estimated 1022 to 1024 stars. Only about 4,000 of these stars are visible to the naked eye—all within the Milky Way galaxy.",
    imgSrc: isProd
      ? "https://pubsystem.github.io/galaxy/grids/stars.jpg"
      : "/grids/stars.jpg",
    alt: "star",
  },
  {
    title: "Compact star",
    herf: "/detail/CompactStar",
    desc: "In astronomy, the term compact star (or compact object) refers collectively to white dwarfs, neutron stars, and black holes. It would grow to include exotic stars if such hypothetical, dense bodies are confirmed to exist. All compact objects have a high mass relative to their radius, giving them a very high density, compared to ordinary atomic matter. Compact stars are often the endpoints of stellar evolution and, in this respect, are also called stellar remnants. The state and type of a stellar remnant depends primarily on the mass of the star that it formed from. The ambiguous term compact star is often used when the exact nature of the star is not known, but evidence suggests that it has a very small radius compared to ordinary stars. A compact star that is not a black hole may be called a degenerate star.",
    imgSrc: isProd
      ? "https://pubsystem.github.io/galaxy/grids/CompactStar.jpg"
      : "/grids/CompactStar.jpg",
    alt: "CompactStar",
  },
  {
    title: "Interstellar medium",
    herf: "/detail/InterstellarMedium",
    desc: "In astronomy, the interstellar medium (ISM) is the matter and radiation that exist in the space between the star systems in a galaxy. This matter includes gas in ionic, atomic, and molecular form, as well as dust and cosmic rays. It fills interstellar space and blends smoothly into the surrounding intergalactic space. The energy that occupies the same volume, in the form of electromagnetic radiation, is the interstellar radiation field. Although the density of atoms in the ISM is usually far below that in the best laboratory vacuums, the mean free path between collisions is short compared to typical interstellar lengths, so on these scales the ISM behaves as a gas (more precisely, as a plasma: it is everywhere at least slightly ionized), responding to pressure forces, and not as a collection of non-interacting particles.",
    imgSrc: isProd
      ? "https://pubsystem.github.io/galaxy/grids/InterstellarMedium.jpg"
      : "/grids/InterstellarMedium.jpg",
    alt: "InterstellarMedium",
  },
  {
    title: "Cosmic dust",
    herf: "/detail/CosmicDust",
    desc: "Cosmic dust – also called extraterrestrial dust, space dust, or star dust – is dust that occurs in outer space or has fallen onto Earth.[1][2] Most cosmic dust particles measure between a few molecules and 0.1 mm (100 μm), such as micrometeoroids. Larger particles are called meteoroids. Cosmic dust can be further distinguished by its astronomical location: intergalactic dust, interstellar dust, interplanetary dust (as in the zodiacal cloud), and circumplanetary dust (as in a planetary ring). There are several methods to obtain space dust measurement.",
    imgSrc: isProd
      ? "https://pubsystem.github.io/galaxy/grids/CosmicDust.jpg"
      : "/grids/CosmicDust.jpg",
    alt: "CosmicDust",
  },
  {
    title: "Sun",
    herf: "/detail/Sun",
    desc: "The Sun is the star at the center of the Solar System. It is a massive, hot ball of plasma, inflated and heated by nuclear fusion reactions at its core. Part of this internal energy is emitted from its surface as light, ultraviolet, and infrared radiation, providing most of the energy for life on Earth.",
    imgSrc: isProd
      ? "https://pubsystem.github.io/galaxy/grids/nasa_sun.jpg"
      : "/grids/nasa_sun.jpg",
  },

  {
    title: "Jupiter",
    herf: "/detail/Jupiter",
    imgSrc: isProd
      ? "https://pubsystem.github.io/galaxy/grids/jupiter2.jpg"
      : "/grids/jupiter2.jpg",
    desc: "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass more than two and a half times that of all the other planets in the Solar System combined, and slightly less than one one-thousandth the mass of the Sun. Jupiter orbits the Sun at a distance of 5.20 AU (778.5 Gm) with an orbital period of 11.86 years. Jupiter is the third brightest natural object in the Earth's night sky after the Moon and Venus, and it has been observed since prehistoric times. It was named after Jupiter, the chief deity of ancient Roman religion.",
    alt: "Jupiter",
  },
  {
    title: "Earth",
    herf: "/detail/Earth",
    imgSrc: isProd
      ? "https://pubsystem.github.io/galaxy/grids/earth.jpg"
      : "/grids/earth.jpg",
    desc: "Earth is the third planet from the Sun and the only astronomical object known to harbor life. This is enabled by Earth being a water world, the only one in the Solar System sustaining liquid surface water. Almost all of Earth's water is contained in its global ocean, covering 70.8% of Earth's surface. The remaining 29.2% of Earth's surface is land, most of which is located in the form of continental landmasses within one hemisphere, Earth's land hemisphere. Most of Earth's land is somewhat humid and covered by vegetation, while large sheets of ice at Earth's polar deserts retain more water than Earth's groundwater, lakes, rivers and atmospheric water combined. Earth's land is part of Earth's crust, consisting of several slowly moving tectonic plates, which interact to produce mountain ranges, volcanoes, and earthquakes. Earth has a liquid outer core that generates a magnetosphere capable of deflecting most of the destructive solar winds and cosmic radiation.",
  },
  {
    title: "Moon",
    herf: "/detail/Moon",
    imgSrc: isProd
      ? "https://pubsystem.github.io/galaxy/grids/moon.jpg"
      : "/grids/moon.jpg",
    desc: "The Moon is Earth's only natural satellite. It orbits at an average distance of 384400 km (238900 mi), about 30 times the planet's diameter. It always faces Earth with its near side, being tidally locked to Earth. This results in its 29.5 days long month of phases being equal to its length of day. Exerting considerable force on Earth it and to a lesser extend the Sun are the main drivers of the tides.",
  },
];

export default contentData;
