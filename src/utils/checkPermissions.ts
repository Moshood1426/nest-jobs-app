import { UnauthorizedException } from '@nestjs/common';

export function checkPermissions(
  requestUserId: number,
  resourceUserId: number,
) {
  if (requestUserId !== resourceUserId) {
    throw new UnauthorizedException('User with email cannot be found');
  }

  return;
}
