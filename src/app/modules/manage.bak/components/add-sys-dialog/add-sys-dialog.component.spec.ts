import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AddSysDialogComponent} from './add-sys-dialog.component';

describe('AddSysDialogComponent', () => {
    let component: AddSysDialogComponent;
    let fixture: ComponentFixture<AddSysDialogComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AddSysDialogComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AddSysDialogComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
