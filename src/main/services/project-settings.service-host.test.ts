import { testingProjectSettingsService } from '@main/services/project-settings.service-host';

jest.mock('@main/data/core-project-settings-info.data', () => ({
  __esModule: true,
  coreProjectSettingsInfo: {
    'platform.fullName': { default: '%test_project_full_name_missing%' },
    'platform.language': { default: '%test_project_language_missing%' },
    'platformScripture.booksPresent': {
      default: 'thisIsNotActuallyBooksPresent',
    },
    // Not present! Should throw error 'platformScripture.versification': { default: 1629326 },
  },
  coreProjectSettingsValidators: {
    'platformScripture.booksPresent': async (): Promise<boolean> => {
      // Accept all attempts to set the books present
      return true;
    },
  },
}));

describe('isValid', () => {
  it('should return true', async () => {
    const projectSettingKey = 'platformScripture.booksPresent';
    const isSettingChangeValid = await testingProjectSettingsService.isValid(
      projectSettingKey,
      '000000011110000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
      '000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
      'ParatextStandard',
    );
    expect(isSettingChangeValid).toBe(true);
  });
});

describe('getDefault', () => {
  it('should get default value', async () => {
    const projectSettingKey = 'platform.fullName';
    const defaultValue = await testingProjectSettingsService.getDefault(
      projectSettingKey,
      'ParatextStandard',
    );
    expect(defaultValue).toBe('%test_project_full_name_missing%');
  });

  it('should throw if a default is not present', async () => {
    const projectSettingKey = 'platformScripture.versification';
    await expect(
      testingProjectSettingsService.getDefault(projectSettingKey, 'ParatextStandard'),
    ).rejects.toThrow(new RegExp(`default value for project setting ${projectSettingKey}`));
  });
});
