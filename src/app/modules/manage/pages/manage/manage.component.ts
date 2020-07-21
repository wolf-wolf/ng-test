import {Component, OnDestroy, OnInit} from '@angular/core';
import {SideNavService} from '../../../../core/services/side-nav.service';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-manage',
    templateUrl: './manage.component.html',
    styleUrls: ['./manage.component.scss'],
})
export class ManageComponent implements OnInit, OnDestroy {
    showMenu: boolean;
    currNav: string;
    sub: Subscription;

    constructor(private sideNavService: SideNavService) {
        this.sideNavService.showMenuSource.subscribe(res => {
            this.showMenu = res;
        });
    }

    ngOnInit(): void {
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe(); // 不要忘记取消订阅
    }
}
