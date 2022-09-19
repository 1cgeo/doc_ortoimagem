import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'Fluxo de Trabalho - CDGV',
    Svg: require('@site/static/img/cdgv.svg').default,
    link: 'docs/fluxo_trabalho_cdgv/intro',
    description: (
      <>
        Fluxo de Trabalho para a produção do CDGV de Carta Ortoimagem.
      </>
    ),
  },
  {
    title: 'Fluxo de Trabalho - Carta Ortoimagem',
    Svg: require('@site/static/img/cartorto.svg').default,
    link: 'docs/fluxo_trabalho_cdgv/intro',
    description: (
      <>
        Fluxo de Trabalho para a produção de Carta Ortoimagem.
      </>
    ),
  },
  {
    title: 'Controle de Qualidade',
    Svg: require('@site/static/img/qc.svg').default,
    link: 'docs/fluxo_trabalho_cdgv/intro',
    description: (
      <>
        Procedimentos de Controle de Qualidade
      </>
    ),
  },
];

function Feature({Svg, title, description, link}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3><Link to = {link}>{title}</Link></h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
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
