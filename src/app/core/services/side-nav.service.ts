import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable(
    {providedIn: 'root'}
)
export class SideNavService {
    // Observable boolean sources
    public showMenuSource = new BehaviorSubject<boolean>(false);
    private isShowMenu = false;

    // 通过调用该方法传值
    showMenuAction() {
        this.isShowMenu = !this.isShowMenu;
        this.showMenuSource.next(this.isShowMenu);
    }

}
