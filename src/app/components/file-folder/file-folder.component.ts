import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { NodeModel } from 'src/app/models/node.model';

@Component({
  selector: 'app-file-folder',
  templateUrl: './file-folder.component.html',
  styleUrls: ['./file-folder.component.scss']
})
export class FileFolderComponent {

  // current node
  @Input('currentNode') currentNode: NodeModel;

  // An output event for remove file/folder from the list
  @Output('removeNode') removeNode: EventEmitter<any> = new EventEmitter();

  /**
   * form control with required validation
   *
   */
  name = new FormControl('', [Validators.required])

  /**
   * Save file/folder to the list
   *
   */
   save() {
    if (this.name.valid) {
      this.currentNode.name = this.name.value
    } else {
      this.name.markAllAsTouched();
    }
  }

  /**
   * Add a child node into nodes as type 'unset'
   *
   */
  addChild() {
    this.currentNode.children.push({
      id: new Date().getTime().toString(),
      children: [],
      type: 'unset'
    })
  }

  /**
   * Emit output event for removing the node
   *
   */
   remove() {
    this.removeNode.emit(this.currentNode.id);
  }

  /**
   * Remove child node based on node id
   *
   * @param {string} id - node id to be deleted
   */
  removeChild(id) {
    this.currentNode.children = this.currentNode.children.filter((child) => child.id !== id);
  }
}
