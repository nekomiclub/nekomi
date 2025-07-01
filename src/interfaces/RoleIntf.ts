/** Array of roles capabilities
 * @see docs/roles.md
 */
export const RoleCapabilities = [
  'root',
  'admin',
  'mod',
  'editor',
  'dubber',
  'basic',
  'titleAdd',
  'titleEdit',
  'titleDelete',
  'titleEditEpsMeta',
  'titleEditLinked',
  'seriesAdd',
  'seriesDelete',
  'dubberEditMembers',
  'dubberEditEditors',
  'dubberEditProfile',
  'staffEditUserInfo',
  'staffDeleteUser',
  'staffRestrictUser',
  'staffEditDubbers',
  'staffCreateDubber',
  'staffDeleteDubber'
] as const;

/** Type implementation of RoleCapabilities array
 * @see docs/roles.md
 */
export type RoleCapability = typeof RoleCapabilities[number];