import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create a task', () => {
    const task = { title: 'Task 1', description: 'Description 1', due_date: '2024-03-08' };
    service.createTask(task).then((result: any) => {
      expect(result[0]).toBe(true);
      expect(result[1]).toBe('Task 1');
    });
  });

  it('should edit a task', () => {
    const taskId = 1;
    const task = { title: 'Edited Task', description: 'Edited Description', due_date: '2024-03-09' };
    service.editTask(taskId, task).then((result: any) => {
      expect(result).toBe(true);
    });
  });

  it('should update a task', () => {
    const taskId = 1;
    service.updateTask(taskId).then((result: any) => {
      expect(result).toBe(true);
    });
    
  });

  it('should delete a task', () => {
    const taskId = 1;
    service.deleteTask(taskId).then((result: any) => {
      expect(result[0]).toBe(true);
    });
  });

  it('should show alert', () => {
    spyOn(window, 'confirm').and.returnValue(true);
    service.showAlert().then((result: any) => {
      expect(result).toBe(true);
    });
  });
});