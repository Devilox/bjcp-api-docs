import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const bjcpLogo = require('@site/static/img/logo_bjcp.png').default;
const strapiLogo = require('@site/static/img/logo-strapi.jpg').default;

const FeatureList = [
  {
    title: 'BJCP Style Guidelines 2021',
    Img: bjcpLogo,
    description: (
      <>
        All content from API come from the official style guidelines of BJCP 2021.
      </>
    ),
  },
  {
    title: 'GraphQL API easy to use',
    Svg: require('@site/static/img/graphql-logo.svg').default,
    description: (
      <>
        <span>A GraphQL API easy to use to build beautiful mobile and web application.</span><br />
        <span>For each beer style, you can use all information you want with the power of GraphQL, for example discover the history of a style of beer, the description of its aromas, its sense of smell, technical information such as densities (OG/FG), IBU min/max, SRM, ABV ...</span>
      </>
    ),
  },
];

function Feature(props) {
  return (
    <div className={clsx('col col--6')}>
      <div className={styles.featurePictureContainer}>
        {props.Svg && <props.Svg className={styles.featurePicture} role="img" />}
        {props.Img && <img className={styles.featurePicture} src={props.Img} alt="" />}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={clsx('hero', styles.features)}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
