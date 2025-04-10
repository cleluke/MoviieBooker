import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { BadRequestException, UnauthorizedException } from '@nestjs/common';

describe('AuthService', () => {
  let service: AuthService;
  let usersService: Partial<UsersService>;
  let jwtService: Partial<JwtService>;

  beforeEach(async () => {
    usersService = {
      findByEmail: jest.fn(),
      create: jest.fn(),
    };

    jwtService = {
      sign: jest.fn().mockReturnValue('mocked-jwt-token'),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        { provide: UsersService, useValue: usersService },
        { provide: JwtService, useValue: jwtService },
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  describe('register', () => {
    it('should throw if email is already used', async () => {
      (usersService.findByEmail as jest.Mock).mockResolvedValue({ id: 1 });

      await expect(
          service.register({ username: 'John', email: 'test@test.com', password: '1234' }),
      ).rejects.toThrow(BadRequestException);
    });

    it('should hash password and create user', async () => {
      (usersService.findByEmail as jest.Mock).mockResolvedValue(null);
      (usersService.create as jest.Mock).mockImplementation(user => user);

      const result = await service.register({
        username: 'John',
        email: 'test@test.com',
        password: '1234',
      });

      expect(usersService.create).toHaveBeenCalled();
      expect(result.password).not.toBe('1234'); // hashed
    });
  });

  describe('login', () => {
    it('should throw if user not found', async () => {
      (usersService.findByEmail as jest.Mock).mockResolvedValue(null);

      await expect(
          service.login({ email: 'test@test.com', password: '1234' }),
      ).rejects.toThrow(UnauthorizedException);
    });

    it('should throw if password invalid', async () => {
      (usersService.findByEmail as jest.Mock).mockResolvedValue({
        id: 1,
        password: await bcrypt.hash('wrongpass', 10),
      });

      await expect(
          service.login({ email: 'test@test.com', password: '1234' }),
      ).rejects.toThrow(UnauthorizedException);
    });

    it('should return token if login successful', async () => {
      const hashed = await bcrypt.hash('1234', 10);
      (usersService.findByEmail as jest.Mock).mockResolvedValue({
        id: 1,
        password: hashed,
      });

      const result = await service.login({ email: 'test@test.com', password: '1234' });

      expect(result).toEqual({ token: 'mocked-jwt-token' });
    });
  });
});
