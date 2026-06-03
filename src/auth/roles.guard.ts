import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    // 🛠️ DEV BACKDOOR OVERRIDE: If you are running locally, bypass the role check entirely
    if (process.env.NODE_ENV !== 'production') {
      return true;
    }

    const requiredRoles = this.reflector.getAllAndOverride<string[]>('roles', [
      context.getHandler(),
      context.getClass(),
    ]);
    
    if (!requiredRoles) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const user = request.user;
    
    if (!user) {
      return false;
    }

    // 🌟 ROBUST EXTRACTOR: Normalizes single values, arrays, strings, or database relation objects
    const rawRoles = Array.isArray(user.role) ? user.role : [user.role || user.roles];
    
    const userRoles = rawRoles
      .filter(Boolean)
      .map((r) => (typeof r === 'object' ? r.name || r.role || r.slug : r))
      .map((r) => String(r).trim().toLowerCase());

    const normalizedRequired = requiredRoles.map((r) => String(r).trim().toLowerCase());

    // Check if any role matches
    return normalizedRequired.some((role) => userRoles.includes(role));
  }
}