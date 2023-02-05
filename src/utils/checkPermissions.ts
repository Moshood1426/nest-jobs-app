import { UnauthorizedException } from '@nestjs/common';

export function checkPermissions(
  requestUserId: string,
  resourceUserId: string,
) {
  if (requestUserId !== resourceUserId) {
    throw new UnauthorizedException('User with email cannot be found');
  }

  return;
}
