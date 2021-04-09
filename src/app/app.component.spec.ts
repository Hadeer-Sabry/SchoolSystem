import { TestBed , ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let app :AppComponent
  let fixture :ComponentFixture<AppComponent>

  beforeEach(function(){
    TestBed.configureTestingModule({
      imports:[RouterTestingModule]
    })
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  })
  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'schoolSystem'`, () => {
    expect(app.title).toEqual('schoolSystem');
  });

});
