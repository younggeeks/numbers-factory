import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {create} from 'react-test-renderer';
import NumberList from './components/NumberList';
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('contains the tags as defined', () => {
  const appComponent = create(
    <App/>,
  );
  let tree = appComponent.toJSON()
  expect(tree).toMatchSnapshot()
});

it('contains correct length of numbers array', () => {

  const appComponent = create(
    <App/>,
  );
  const instance = appComponent.getInstance()
  expect(instance.state.numbers.length).toEqual(10000)
});
it('Generates numbers array', () => {

  const appComponent = create(
    <App/>,
  );
  const instance = appComponent.getInstance()

  const {max,min} = instance.state
    console.log("the max ", max,min)
  expect(instance.state.numbers.length).toEqual(10000)
  instance.generate()
  expect(max===instance.state.max).toBeFalsy()
});
it('Changes direction when sort is called', () => {
  const appComponent = create(
    <App/>,
  );
  const instance = appComponent.getInstance()
  expect(instance.state.numbers.length).toEqual(10000)
  instance.sort()
  expect(instance.state.direction).toEqual("descending")
});
