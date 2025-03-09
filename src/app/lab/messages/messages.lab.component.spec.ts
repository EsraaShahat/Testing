
// describe("2-message component integration testing:", () => {
   
   
//     it("expect component template to be empty", () => {
//         //Note: there is @if"messageService.messages.length" in line 1 in template
//     })
//     it("then expect div.msg to have the messages after setting it", () => {})
// })


// describe("2-message component testing:", () => {
   
   
//     it("expect component template to be empty", () => {
//         //Note: there is @if"messageService.messages.length" in line 1 in template
//     })
//     it("then expect div.msg to have the messages after setting it", () => {})
// })



import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MessagesComponentForLab } from './messages.lab.component';
import { MessageService } from '../../services/message/message.service';
import { By } from '@angular/platform-browser';

describe('2-message component testing:', () => {
    let component: MessagesComponentForLab;
    let fixture: ComponentFixture<MessagesComponentForLab>;
    let messageService: MessageService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [MessagesComponentForLab], 
            providers: [MessageService]
        });

        fixture = TestBed.createComponent(MessagesComponentForLab);
        component = fixture.componentInstance;
        messageService = TestBed.inject(MessageService);
    });

    it('expect component template to be empty', () => {
        messageService.messages = [];
        fixture.detectChanges();

        const msgDiv = fixture.debugElement.query(By.css('div.msg'));
        expect(msgDiv).toBeNull();
    });

    it('then expect div.msg to have the messages after setting it', () => {
        messageService.messages = [{ id: 1, message: 'task 1' }];
        fixture.detectChanges();

        const msgDiv = fixture.debugElement.query(By.css('div.msg'));
        expect(msgDiv).not.toBeNull();
        expect(msgDiv.nativeElement.textContent).toContain('task');
    });
});