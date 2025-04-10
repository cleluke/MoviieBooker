import { JwtGuard } from './jwt.guard';
import { ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

describe('JwtGuard', () => {
  let guard: JwtGuard;
  let reflector: Reflector;

  beforeEach(() => {
    reflector = { getAllAndOverride: jest.fn() } as any;
    guard = new JwtGuard(reflector);
  });

  it('should allow public route', () => {
    (reflector.getAllAndOverride as jest.Mock).mockReturnValue(true);
    const context = {} as ExecutionContext;
    expect(guard.canActivate(context)).toBe(true);
  });
});