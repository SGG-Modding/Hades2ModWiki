import clsx from "clsx"
import Heading from "@theme/Heading"
import styles from "./styles.module.css"

const FeatureList = [
  {
    title: "Install",
    img: require("@site/static/img/Crossroads_CardAltar_Terrain01.png").default,
    adjust: { marginTop: "1rem" },
    description: (
      <>Learn how to use r2modman to install Hades 2 mods from Thunderstore!</>
    ),
  },
  {
    title: "Develop",
    img: require("@site/static/img/Crossroads_Cauldron_01.png").default,
    description: <>Learn how to create your own Hades 2 mods!</>,
  },
  {
    title: "Learn",
    img: require("@site/static/img/Crossroads_Books_02.png").default,
    adjust: { marginTop: "1rem" },
    description: (
      <>
        Learn what in-game functions, data structures, and other information is
        available, and how it's used.
      </>
    ),
  },
]

function Feature({ img, title, description, adjust = {} }) {
  return (
    <div className={clsx("col col--4")}>
      <div
        className="text--center"
        style={{ height: "11rem" }}
      >
        <img
          src={img}
          style={{ maxHeight: "10rem", maxWidth: "15rem", ...adjust }}
        />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature
              key={idx}
              {...props}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
