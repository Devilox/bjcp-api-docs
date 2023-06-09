import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

const Logo = require('@site/static/img/logo-final-v1.svg').default;

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero shadow--lw', styles.heroBanner)}>
      <div className="container">
        <Logo width={300} role="img" />
        <h1 className={styles.title}>{siteConfig.title}</h1>
        <p className={styles.title}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--outline button--warning button--lg"
            to="/docs/bjcp">
            Discover BJCP & API
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title="Official Documentation of BJCP GrahQL API"
      description="Discover and play with GraphQL API with many resources of BJCP Style Guidelines 2021">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
