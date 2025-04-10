import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

describe('AuthController', () => {
  let controller: AuthController;
  let service: Partial<AuthService>;

  beforeEach(async () => {
    service = {
      register: jest.fn().mockResolvedValue({ id: 1, username: 'John' }),
      login: jest.fn().mockResolvedValue({ token: 'jwt-token' }),
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [{ provide: AuthService, useValue: service }],
    }).compile();

    controller = module.get<AuthController>(AuthController);
  });

  it('should call register()', async () => {
    const dto = { username: 'John', email: 'john@test.com', password: '1234' };
    const result = await controller.register(dto);
    expect(result).toEqual({ id: 1, username: 'John' });
    expect(service.register).toHaveBeenCalledWith(dto);
  });

  it('should call login()', async () => {
    const dto = { email: 'john@test.com', password: '1234' };
    const result = await controller.login(dto);
    expect(result).toEqual({ token: 'jwt-token' });
    expect(service.login).toHaveBeenCalledWith(dto);
  });
});
