export enum UserPermission {
  READ = 'READ',
  WRITE = 'WRITE',
  DELETE = 'DELETE',
  VIEW = 'VIEW',
}

export enum UserRole {
  ADMIN = 'ADMIN',
  EDITOR = 'EDITOR',
  VIEWER = 'VIEWER',
}

export interface User {
  role: string;
  permissions: string[];
}

export function hasAccess(user: User, requiredPermission: string): boolean {
  if (user.role === 'ADMIN') return true;
  return user.permissions.includes(requiredPermission);
}
