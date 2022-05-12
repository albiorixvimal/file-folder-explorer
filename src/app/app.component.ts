import { Component } from '@angular/core';
import { NodeModel } from './models/node.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  /**
   *  node list
   *
   */
  nodes: NodeModel[] = [];

  /**
   * Add a root node in the list
   *
   */
  add() {
    this.nodes.push({
      id: new Date().getTime().toString(),
      children: [],
      type: 'folder'
    })
  }

  /**
   * Remove root node from the list
   *
   * @param {string} id - node id to be deleted
   */
  remove(id: string): void {
    this.nodes = this.nodes.filter((node) => node.id !== id);
  }
}
