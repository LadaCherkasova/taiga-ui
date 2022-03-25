import {Inject, Injectable} from '@angular/core';
import {
    TUI_NOTIFICATION_OPTIONS,
    TuiNotificationDefaultOptions,
} from '@taiga-ui/core/tokens';
import {PolymorpheusComponent, PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

import {AbstractTuiNotificationsService} from './abstract.notifications';
import {TuiNotificationAlertComponent} from './notification-alert/notification-alert.component';

@Injectable({providedIn: 'root'})
export class TuiNotificationsService extends AbstractTuiNotificationsService<TuiNotificationDefaultOptions> {
    protected readonly defaultOptions = this.options;

    component: PolymorpheusContent<any> = new PolymorpheusComponent<any, any>(
        TuiNotificationAlertComponent,
    );

    constructor(
        @Inject(TUI_NOTIFICATION_OPTIONS)
        readonly options: TuiNotificationDefaultOptions,
    ) {
        super();
    }
}
