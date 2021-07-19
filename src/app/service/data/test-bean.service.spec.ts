import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { TestBeanService } from './test-bean.service';

describe('TestBeanService', () => {
  let service: TestBeanService;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(TestBeanService);
  });

  it('should be created a service TestBeanService', () => {
    expect(service).toBeTruthy();
  });
});
