import React, { Fragment } from 'react';
import TodoList from '../TodoList/TodoList.component';
import format from 'date-fns/format';
import AddTodo from '../AddTodo/AddTodo.component';
import * as styles from './App.styles';

const Header = () => {
  return (
    <Fragment>
      <header css={styles.header}>
        <h3 css={styles.headerText}>Today</h3>
        <p css={styles.date}>{format(Date.now(), 'ddd MMM D')}</p>
      </header>
      <AddTodo />
    </Fragment>
  );
};

function App() {
  return (
    <div css={styles.app}>
      <Header />
      <main css={styles.main}>
        <TodoList />
      </main>
    </div>
  );
}

export default App;
