import { ModalConfig } from './interfaces/modal-config';
import { Component } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['modal.component.scss']
})
export class ModalComponent {
  public config: ModalConfig;
}
