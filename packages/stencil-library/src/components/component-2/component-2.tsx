import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-2',
  shadow: true,
})
export class Component2 {

  render() {
    return <div>I'm component 2</div>;
  }
}
