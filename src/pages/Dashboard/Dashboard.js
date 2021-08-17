import React from 'react';
import styles from './Dashboard.module.css';
import Bonuses from '../../components/Bonuses/Bonuses';
import Panel from '../../ui/Panel/Panel';
import Accounts from '../../components/Accounts/Accounts';
import Deposits from '../../components/Deposits/Deposits';

const Dashboard = () => {
  return (
    <>
      <div className={styles.container}>
        <aside className={styles.sidebar}>
          <Panel title="Бонусы">
            <Bonuses/>
          </Panel>
          <Panel title="Счета и карты">
            <Accounts/>
          </Panel>
          <Panel title="Вклады">
            <Deposits/>
          </Panel>
        </aside>
        <main className={styles.main}/>
      </div>
    </>
  );
};

export default Dashboard;

