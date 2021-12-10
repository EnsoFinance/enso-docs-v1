import React from 'react'
import Layout from '@theme/Layout'
import styles from './index.module.css'
import { GettingStartedCards } from '../components/GettingStartedCards'
import { ToolsCards } from '../components/ToolsCards'
import ProjectsCards from '../components/ProjectsCards'
import HomepageLogo from '../../static/img/homepageLogo.svg'

export default function Home() {
  return (
    <Layout>
      <main>
        <div className={styles.header}>
          <HomepageLogo className={styles.logoText} />
          <h2 className={styles.headerSubtitle}>FOR DEVELOPERS</h2>
        </div>
        <div className={styles.layout}>
          <div className={styles.layoutFlexBox}>
            <div className={styles.gettingStartedFlexBox}>
              <p className={styles.gettingStarted}>Getting started</p>
              <a className={styles.viewAllLink} href="docs/guides/create-strategy">
              </a>
            </div>
            <GettingStartedCards />
            <p className={styles.tools}>Tools</p>
            <ToolsCards />
            <ProjectsCards />
          </div>
        </div>
      </main>
    </Layout>
  )
}
