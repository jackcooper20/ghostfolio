import { publicRoutes } from '@ghostfolio/common/routes/routes';

import { CommonModule } from '@angular/common';
import {
  CUSTOM_ELEMENTS_SCHEMA,
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { refreshOutline } from 'ionicons/icons';

import { GfLogoComponent } from '../logo';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    GfLogoComponent,
    IonIcon,
    MatButtonModule,
    RouterModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  selector: 'gf-membership-card',
  styleUrls: ['./membership-card.component.scss'],
  templateUrl: './membership-card.component.html'
})
export class GfMembershipCardComponent {
  @Input() public expiresAt: string;
  @Input() public hasPermissionToCreateApiKey: boolean;
  @Input() public name: string;

  @Output() generateApiKeyClicked = new EventEmitter<void>();

  public routerLinkPricing = publicRoutes.pricing.routerLink;

  public constructor() {
    addIcons({ refreshOutline });
  }

  public onGenerateApiKey(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();

    this.generateApiKeyClicked.emit();
  }
}
