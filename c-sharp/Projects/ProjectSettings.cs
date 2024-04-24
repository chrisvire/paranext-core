namespace Paranext.DataProvider.Projects;

public sealed class ProjectSettings
{
    public const string PB_BOOKS_PRESENT = "platformScripture.booksPresent";
    public const string PT_BOOKS_PRESENT = "BooksPresent";

    public const string PB_FULL_NAME = "platform.fullName";
    public const string PT_FULL_NAME = "FullName";

    public const string PB_LANGUAGE = "platform.language";
    public const string PT_LANGUAGE = "Language";

    public const string PB_VERSIFICATION = "platformScripture.versification";
    public const string PT_VERSIFICATION = "Versification";

    // Make sure this dictionary gets updated whenever new settings are added
    private static readonly Dictionary<string, string> s_platformBibleToParatextSettingsNames =
        new()
        {
            { PB_BOOKS_PRESENT, PT_BOOKS_PRESENT },
            { PB_FULL_NAME, PT_FULL_NAME },
            { PB_LANGUAGE, PT_LANGUAGE },
            { PB_VERSIFICATION, PT_VERSIFICATION },
        };

    private static readonly Dictionary<string, string> s_paratextToPlatformBibleSettingsNames =
        s_platformBibleToParatextSettingsNames.ToDictionary((i) => i.Value, (i) => i.Key);

    /// <summary>
    /// Convert project setting names from Platform.Bible terminology to Paratext terminology
    /// </summary>
    /// <param name="pbSettingName">Setting name in Platform.Bible terminology</param>
    /// <returns>Setting name in Paratext terminology if a mapping exists</returns>
    public static string? GetParatextSettingNameFromPlatformBibleSettingName(string pbSettingName)
    {
        return s_platformBibleToParatextSettingsNames.TryGetValue(pbSettingName, out string? retVal)
            ? retVal
            : null;
    }

    /// <summary>
    /// Convert project setting names from Paratext terminology to Platform.Bible terminology
    /// </summary>
    /// <param name="ptSettingName">Setting name in Paratext terminology</param>
    /// <returns>Setting name in Platform.Bible terminology if a mapping exists</returns>
    public static string? GetPlatformBibleSettingNameFromParatextSettingName(string ptSettingName)
    {
        return s_paratextToPlatformBibleSettingsNames.TryGetValue(ptSettingName, out string? retVal)
            ? retVal
            : null;
    }
}
