import React from 'react';
import logo from './logo.svg';
import './App.css';
const auth = require('solid-auth-client');
const { default: data } = require('@solid/query-ldflex');



function App() {
  return (
    <div className="App">
      <header>
          <h1>ToDo List</h1>
      </header>
      <TodoList />
    </div>
  );
}

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
    }
  }

  handleNewTask(task) {
    if(task === "") {
      alert("Empty task not allowed!");
      return;
    }
    const tasks = this.state.tasks.concat(task);
    this.setState({tasks});
  }

  handleDeleteTask(task) {
    const tasks = this.state.tasks.slice();
    tasks.splice(tasks.indexOf(task), 1);
    this.setState({tasks});
  }

  async loadFromSolid() {
    let tasks = await loadSolidTasks();
    this.setState({tasks});
  }

  async saveToSolid() {
    let oldTasks = await loadSolidTasks();
    saveSolidTasks(this.state.tasks, oldTasks);
  }

  render() {
    return (
      <div className="App-content">
        <InputTask addNewTask={(task) => this.handleNewTask(task)}/>
        <TaskList tasks={this.state.tasks} deleteTask={(task) => this.handleDeleteTask(task)}/>
        <SolidStorage loadFromSolid={() => this.loadFromSolid()} saveToSolid={() => this.saveToSolid()}/>
      </div>
    );
  }
}

class InputTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    this.props.addNewTask(this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="task" value={this.state.value} onChange={this.handleChange} />
        <input type="submit" value="+" />
      </form>
    );
  }
  
}

function TaskList(props) {
  return (
    props.tasks.map(t => {
      return (
        <li key={t}>
          {t}<button onClick={() => props.deleteTask(t)}>-</button>
        </li>
      );
    })
  );
}

class SolidStorage extends React.Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.loadFromSolid()}>Load from Solid</button>
        <button onClick={() => this.props.saveToSolid()}>Save to Solid</button>
      </div>
    );
  }
}

async function loadSolidTasks() {
  let session = await getCurrentSession();
  let url = session.webId.replace("profile/card#me", "todo/todo.ttl#todo");
  let todo = data[url];
  const tasks = [];
  for await (const task of todo.schema_itemListElement) {
    tasks.push(task.toString());
  }
  return Array.from(tasks.values());
}

async function saveSolidTasks(tasks, oldTasks) {
  let session = await getCurrentSession();
  let url = session.webId.replace("profile/card#me", "todo/todo.ttl#todo");
  let todo = data[url];
  oldTasks.forEach(async t => {
    await todo["schema:itemListElement"].delete(t.toString());
  });
  tasks.forEach(async t => {
    await todo["schema:itemListElement"].add(t.toString());
  });
}

async function getCurrentSession() {
  let session = await auth.currentSession();
  let popupUri = 'https://solid.community/common/popup.html';
  if(!session) {
    session = await auth.popupLogin({ popupUri });
  }
  return session;
}

export default App;
