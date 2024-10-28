declare module 'platform-scripture' {
  import { VerseRef } from '@sillsdev/scripture';
  import type {
    DataProviderDataType,
    DataProviderSubscriberOptions,
    DataProviderUpdateInstructions,
    ExtensionDataScope,
    IDataProvider,
  } from '@papi/core';
  import type { IProjectDataProvider } from 'papi-shared-types';
  import { Dispose, LocalizeKey, UnsubscriberAsync } from 'platform-bible-utils';
  import type { Usj } from '@biblionexus-foundation/scripture-utilities';

  // #region Project Interface Data Types

  /** Provides Scripture data in USFM format by book */
  export type USFMBookProjectInterfaceDataTypes = {
    /** Gets/sets the "raw" USFM data for the specified book */
    BookUSFM: DataProviderDataType<VerseRef, string | undefined, string>;
  };

  /** Provides Scripture data in USFM format by chapter */
  export type USFMChapterProjectInterfaceDataTypes = {
    /** Gets/sets the "raw" USFM data for the specified chapter */
    ChapterUSFM: DataProviderDataType<VerseRef, string | undefined, string>;
  };

  /** Provides Scripture data in USFM format by verse */
  export type USFMVerseProjectInterfaceDataTypes = {
    /** Gets the "raw" USFM data for the specified verse */
    VerseUSFM: DataProviderDataType<VerseRef, string | undefined, string>;
  };

  /** Provides Scripture data in USX format by book */
  export type USXBookProjectInterfaceDataTypes = {
    /** Gets/sets the data in USX form for the specified book */
    BookUSX: DataProviderDataType<VerseRef, string | undefined, string>;
  };

  /** Provides Scripture data in USX format by chapter */
  export type USXChapterProjectInterfaceDataTypes = {
    /** Gets/sets the data in USX form for the specified chapter */
    ChapterUSX: DataProviderDataType<VerseRef, string | undefined, string>;
  };

  /** Provides Scripture data in USX format by verse */
  export type USXVerseProjectInterfaceDataTypes = {
    /** Gets the "raw" data in USX form for the specified verse */
    VerseUSX: DataProviderDataType<VerseRef, string | undefined, string>;
  };

  /** Provides Scripture data in USJ format by book */
  export type USJBookProjectInterfaceDataTypes = {
    /**
     * Gets/sets the data in USJ form for the specified book
     *
     * WARNING: USJ is in very early stages of proposal, so it will likely change over time.
     */
    BookUSJ: DataProviderDataType<VerseRef, Usj | undefined, Usj>;
  };

  /** Provides Scripture data in USJ format by chapter */
  export type USJChapterProjectInterfaceDataTypes = {
    /**
     * Gets/sets the data in USJ form for the specified chapter
     *
     * WARNING: USJ is in very early stages of proposal, so it will likely change over time.
     */
    ChapterUSJ: DataProviderDataType<VerseRef, Usj | undefined, Usj>;
  };

  /** Provides Scripture data in USJ format by verse */
  export type USJVerseProjectInterfaceDataTypes = {
    /**
     * Gets the data in USJ form for the specified verse
     *
     * WARNING: USJ is in very early stages of proposal, so it will likely change over time.
     */
    VerseUSJ: DataProviderDataType<VerseRef, Usj | undefined, Usj>;
  };

  /**
   * Provides Scripture data in plain text format by verse. Plain text does not include notes,
   * figures, and other things that are not considered "verse text"
   */
  export type PlainTextVerseProjectInterfaceDataTypes = {
    /**
     * Gets the data in plain text form for the specified verse. Plain text does not include notes,
     * figures, and other things that are not considered "verse text".
     */
    VersePlainText: DataProviderDataType<VerseRef, string | undefined, string>;
  };

  /**
   * Provides project data for Scripture projects.
   *
   * WARNING: there are many possible Scripture-related data types. We have only implemented some of
   * them. Following are a number of others that may be implemented at some point. This is not yet a
   * complete list of the data types available from Scripture projects.
   */
  type UnfinishedScriptureProjectDataTypes = {};

  /**
   * Provides project data for Scripture projects.
   *
   * WARNING: there are many possible Scripture-related data types. We have only implemented some of
   * them. Following are a number of others that may be implemented at some point. This is not yet a
   * complete list of the data types available from Scripture projects.
   */
  type UnfinishedProjectDataProviderExpanded = {
    /**
     * Gets an extension's serialized project data (so the extension can provide and manipulate its
     * project data)
     *
     * @example `{ extensionName: 'biblicalTerms', dataQualifier: 'renderings' }`
     *
     * @param dataScope Contains the name of the extension requesting the data and which data it is
     *   requesting
     * @returns Promise that resolves to the requested extension project data
     */
    getExtensionData(dataScope: ExtensionDataScope): Promise<string | undefined>;
    /**
     * Sets an extension's serialized project data (so the extension can provide and manipulate its
     * project data)
     *
     * @example `{ extensionName: 'biblicalTerms', dataQualifier: 'renderings' }`
     *
     * @param dataScope Contains the name of the extension requesting the data and which data it is
     *   requesting
     * @param extensionData The new project data for this extension
     * @returns Promise that resolves indicating which data types received updates
     */
    setExtensionData(
      dataScope: ExtensionDataScope,
      extensionData: string | undefined,
    ): Promise<DataProviderUpdateInstructions<UnfinishedScriptureProjectDataTypes>>;
    /**
     * Subscribe to run a callback function when an extension's serialized project data is changed
     *
     * @example `{ extensionName: 'biblicalTerms', dataQualifier: 'renderings' }`
     *
     * @param dataScope Contains the name of the extension requesting the data and which data it is
     *   requesting
     * @param callback Function to run with the updated extension data for this selector
     * @param options Various options to adjust how the subscriber emits updates
     * @returns Unsubscriber function (run to unsubscribe from listening for updates)
     */
    subscribeExtensionData(
      dataScope: ExtensionDataScope,
      callback: (extensionData: string | undefined) => void,
      options?: DataProviderSubscriberOptions,
    ): Promise<UnsubscriberAsync>;
  };

  // #endregion

  // #region Project Data Provider Types

  /** Provides Scripture data in USFM format by book */
  export type IUSFMBookProjectDataProvider =
    IProjectDataProvider<USFMBookProjectInterfaceDataTypes> & {
      /** Gets the "raw" USFM data for the specified book */
      getBookUSFM(verseRef: VerseRef): Promise<string | undefined>;
      /** Sets the "raw" USFM data for the specified book */
      setBookUSFM(
        verseRef: VerseRef,
        usfm: string,
      ): Promise<DataProviderUpdateInstructions<USFMBookProjectInterfaceDataTypes>>;
      /**
       * Subscribe to run a callback function when the "raw" USFM data is changed
       *
       * @param verseRef Tells the provider what changes to listen for
       * @param callback Function to run with the updated USFM for this selector
       * @param options Various options to adjust how the subscriber emits updates
       * @returns Unsubscriber function (run to unsubscribe from listening for updates)
       */
      subscribeBookUSFM(
        verseRef: VerseRef,
        callback: (usfm: string | undefined) => void,
        options?: DataProviderSubscriberOptions,
      ): Promise<UnsubscriberAsync>;
    };

  /** Provides Scripture data in USFM format by chapter */
  export type IUSFMChapterProjectDataProvider =
    IProjectDataProvider<USFMChapterProjectInterfaceDataTypes> & {
      /** Gets the "raw" USFM data for the specified chapter */
      getChapterUSFM(verseRef: VerseRef): Promise<string | undefined>;
      /** Sets the "raw" USFM data for the specified chapter */
      setChapterUSFM(
        verseRef: VerseRef,
        usfm: string,
      ): Promise<DataProviderUpdateInstructions<USFMChapterProjectInterfaceDataTypes>>;
      /**
       * Subscribe to run a callback function when the "raw" USFM data is changed
       *
       * @param verseRef Tells the provider what changes to listen for
       * @param callback Function to run with the updated USFM for this selector
       * @param options Various options to adjust how the subscriber emits updates
       * @returns Unsubscriber function (run to unsubscribe from listening for updates)
       */
      subscribeChapterUSFM(
        verseRef: VerseRef,
        callback: (usfm: string | undefined) => void,
        options?: DataProviderSubscriberOptions,
      ): Promise<UnsubscriberAsync>;
    };

  /** Provides Scripture data in USFM format by verse */
  export type IUSFMVerseProjectDataProvider =
    IProjectDataProvider<USFMVerseProjectInterfaceDataTypes> & {
      /** Gets the "raw" USFM data for the specified verse */
      getVerseUSFM(verseRef: VerseRef): Promise<string | undefined>;
      /** Sets the "raw" USFM data for the specified verse */
      setVerseUSFM(
        verseRef: VerseRef,
        usfm: string,
      ): Promise<DataProviderUpdateInstructions<USFMVerseProjectInterfaceDataTypes>>;
      /**
       * Subscribe to run a callback function when the "raw" USFM data is changed
       *
       * @param verseRef Tells the provider what changes to listen for
       * @param callback Function to run with the updated USFM for this selector
       * @param options Various options to adjust how the subscriber emits updates
       * @returns Unsubscriber function (run to unsubscribe from listening for updates)
       */
      subscribeVerseUSFM(
        verseRef: VerseRef,
        callback: (usfm: string | undefined) => void,
        options?: DataProviderSubscriberOptions,
      ): Promise<UnsubscriberAsync>;
    };

  /** Provides Scripture data in USX format by book */
  export type IUSXBookProjectDataProvider =
    IProjectDataProvider<USXBookProjectInterfaceDataTypes> & {
      /** Gets the "raw" USX data for the specified book */
      getBookUSX(verseRef: VerseRef): Promise<string | undefined>;
      /** Sets the "raw" USX data for the specified book */
      setBookUSX(
        verseRef: VerseRef,
        usx: string,
      ): Promise<DataProviderUpdateInstructions<USXBookProjectInterfaceDataTypes>>;
      /**
       * Subscribe to run a callback function when the "raw" USX data is changed
       *
       * @param verseRef Tells the provider what changes to listen for
       * @param callback Function to run with the updated USX for this selector
       * @param options Various options to adjust how the subscriber emits updates
       * @returns Unsubscriber function (run to unsubscribe from listening for updates)
       */
      subscribeBookUSX(
        verseRef: VerseRef,
        callback: (usx: string | undefined) => void,
        options?: DataProviderSubscriberOptions,
      ): Promise<UnsubscriberAsync>;
    };

  /** Provides Scripture data in USX format by chapter */
  export type IUSXChapterProjectDataProvider =
    IProjectDataProvider<USXChapterProjectInterfaceDataTypes> & {
      /** Gets the Scripture text in USX format for the specified chapter */
      getChapterUSX(verseRef: VerseRef): Promise<string | undefined>;
      /** Sets the Scripture text in USX format for the specified chapter */
      setChapterUSX(
        verseRef: VerseRef,
        usx: string,
      ): Promise<DataProviderUpdateInstructions<USXChapterProjectInterfaceDataTypes>>;
      /**
       * Subscribe to run a callback function when the USX data is changed
       *
       * @param verseRef Tells the provider what changes to listen for
       * @param callback Function to run with the updated USX for this selector
       * @param options Various options to adjust how the subscriber emits updates
       * @returns Unsubscriber function (run to unsubscribe from listening for updates)
       */
      subscribeChapterUSX(
        verseRef: VerseRef,
        callback: (usx: string | undefined) => void,
        options?: DataProviderSubscriberOptions,
      ): Promise<UnsubscriberAsync>;
    };

  /** Provides Scripture data in USX format by verse */
  export type IUSXVerseProjectDataProvider =
    IProjectDataProvider<USXVerseProjectInterfaceDataTypes> & {
      /** Gets the "raw" USX data for the specified verse */
      getVerseUSX(verseRef: VerseRef): Promise<string | undefined>;
      /** Sets the "raw" USX data for the specified verse */
      setVerseUSX(
        verseRef: VerseRef,
        usx: string,
      ): Promise<DataProviderUpdateInstructions<USXVerseProjectInterfaceDataTypes>>;
      /**
       * Subscribe to run a callback function when the "raw" USX data is changed
       *
       * @param verseRef Tells the provider what changes to listen for
       * @param callback Function to run with the updated USX for this selector
       * @param options Various options to adjust how the subscriber emits updates
       * @returns Unsubscriber function (run to unsubscribe from listening for updates)
       */
      subscribeVerseUSX(
        verseRef: VerseRef,
        callback: (usx: string | undefined) => void,
        options?: DataProviderSubscriberOptions,
      ): Promise<UnsubscriberAsync>;
    };

  /** Provides Scripture data in USJ format by book */
  export type IUSJBookProjectDataProvider =
    IProjectDataProvider<USJBookProjectInterfaceDataTypes> & {
      /**
       * Gets the tokenized USJ data for the specified book
       *
       * WARNING: USJ is one of many possible tokenized formats that we may use, so this may change
       * over time. Additionally, USJ is in very early stages of proposal, so it will likely also
       * change over time.
       */
      getBookUSJ(verseRef: VerseRef): Promise<Usj | undefined>;
      /**
       * Sets the tokenized USJ data for the specified book
       *
       * WARNING: USJ is one of many possible tokenized formats that we may use, so this may change
       * over time. Additionally, USJ is in very early stages of proposal, so it will likely also
       * change over time.
       */
      setBookUSJ(
        verseRef: VerseRef,
        usj: Usj,
      ): Promise<DataProviderUpdateInstructions<USJBookProjectInterfaceDataTypes>>;
      /**
       * Subscribe to run a callback function when the tokenized USJ data is changed
       *
       * WARNING: USJ is one of many possible tokenized formats that we may use, so this may change
       * over time. Additionally, USJ is in very early stages of proposal, so it will likely also
       * change over time.
       *
       * @param verseRef Tells the provider what changes to listen for
       * @param callback Function to run with the updated USJ for this selector
       * @param options Various options to adjust how the subscriber emits updates
       * @returns Unsubscriber function (run to unsubscribe from listening for updates)
       */
      subscribeBookUSJ(
        verseRef: VerseRef,
        callback: (usj: Usj | undefined) => void,
        options?: DataProviderSubscriberOptions,
      ): Promise<UnsubscriberAsync>;
    };

  /** Provides Scripture data in USJ format by chapter */
  export type IUSJChapterProjectDataProvider =
    IProjectDataProvider<USJChapterProjectInterfaceDataTypes> & {
      /**
       * Gets the tokenized USJ data for the specified chapter
       *
       * WARNING: USJ is in very early stages of proposal, so it will likely change over time.
       */
      getChapterUSJ(verseRef: VerseRef): Promise<Usj | undefined>;
      /**
       * Sets the tokenized USJ data for the specified chapter
       *
       * WARNING: USJ is in very early stages of proposal, so it will likely change over time.
       */
      setChapterUSJ(
        verseRef: VerseRef,
        usj: Usj,
      ): Promise<DataProviderUpdateInstructions<USJChapterProjectInterfaceDataTypes>>;
      /**
       * Subscribe to run a callback function when the tokenized USJ data is changed
       *
       * WARNING: USJ is in very early stages of proposal, so it will likely change over time.
       *
       * @param verseRef Tells the provider what changes to listen for
       * @param callback Function to run with the updated USJ for this selector
       * @param options Various options to adjust how the subscriber emits updates
       * @returns Unsubscriber function (run to unsubscribe from listening for updates)
       */
      subscribeChapterUSJ(
        verseRef: VerseRef,
        callback: (usj: Usj | undefined) => void,
        options?: DataProviderSubscriberOptions,
      ): Promise<UnsubscriberAsync>;
    };

  /** Provides Scripture data in USJ format by verse */
  export type IUSJVerseProjectDataProvider =
    IProjectDataProvider<USJVerseProjectInterfaceDataTypes> & {
      /**
       * Gets the tokenized USJ data for the specified verse
       *
       * WARNING: USJ is one of many possible tokenized formats that we may use, so this may change
       * over time. Additionally, USJ is in very early stages of proposal, so it will likely also
       * change over time.
       */
      getVerseUSJ(verseRef: VerseRef): Promise<Usj | undefined>;
      /**
       * Sets the tokenized USJ data for the specified verse
       *
       * WARNING: USJ is one of many possible tokenized formats that we may use, so this may change
       * over time. Additionally, USJ is in very early stages of proposal, so it will likely also
       * change over time.
       */
      setVerseUSJ(
        verseRef: VerseRef,
        usj: Usj,
      ): Promise<DataProviderUpdateInstructions<USJVerseProjectInterfaceDataTypes>>;
      /**
       * Subscribe to run a callback function when the tokenized USJ data is changed
       *
       * WARNING: USJ is one of many possible tokenized formats that we may use, so this may change
       * over time. Additionally, USJ is in very early stages of proposal, so it will likely also
       * change over time.
       *
       * @param verseRef Tells the provider what changes to listen for
       * @param callback Function to run with the updated USJ for this selector
       * @param options Various options to adjust how the subscriber emits updates
       * @returns Unsubscriber function (run to unsubscribe from listening for updates)
       */
      subscribeVerseUSJ(
        verseRef: VerseRef,
        callback: (usj: Usj | undefined) => void,
        options?: DataProviderSubscriberOptions,
      ): Promise<UnsubscriberAsync>;
    };

  /**
   * Provides Scripture data in plain text format by verse. Plain text does not include notes,
   * figures, and other things that are not considered "verse text"
   */
  export type IPlainTextVerseProjectDataProvider =
    IProjectDataProvider<PlainTextVerseProjectInterfaceDataTypes> & {
      /**
       * Gets the data in plain text form for the specified verse. Plain text does not include
       * notes, figures, and other things that are not considered "verse text"
       */
      getVersePlainText(verseRef: VerseRef): Promise<Usj | undefined>;
      /**
       * Sets the data in plain text form for the specified verse. Plain text does not include
       * notes, figures, and other things that are not considered "verse text"
       */
      setVersePlainText(
        verseRef: VerseRef,
        data: string,
      ): Promise<DataProviderUpdateInstructions<PlainTextVerseProjectInterfaceDataTypes>>;
      /**
       * Subscribe to run a callback function when the plain text data is changed. Plain text does
       * not include notes, figures, and other things that are not considered "verse text"
       *
       * @param verseRef Tells the provider what changes to listen for
       * @param callback Function to run with the updated USJ for this selector
       * @param options Various options to adjust how the subscriber emits updates
       * @returns Unsubscriber function (run to unsubscribe from listening for updates)
       */
      subscribeVersePlainText(
        verseRef: VerseRef,
        callback: (usj: Usj | undefined) => void,
        options?: DataProviderSubscriberOptions,
      ): Promise<UnsubscriberAsync>;
    };

  // #endregion

  // #region Check Data Types

  /** Details about a check provided by the check itself */
  export type CheckDetails = {
    /** Name or {@link LocalizeKey} of the name of the check to display in UI */
    checkName: string | LocalizeKey;
    /** Description or {@link LocalizeKey} of the description of the check to display in UI */
    checkDescription: string | LocalizeKey;
  };

  /** Details about a check that include an ID assigned to the check */
  export type CheckDetailsWithCheckId = CheckDetails & {
    /** Unique ID of the check within the set of all possible checks */
    checkId: string;
  };

  /** Defines the functions that all checks registered within the extension host must implement. */
  export type Check = Dispose & {
    /**
     * Prepare a check to generate results
     *
     * @param projectId ID of the project that the check will target
     * @returns Warnings generated by the check while initializing
     */
    initialize: (projectId: string) => Promise<(LocalizeKey | string)[]>;
    /** Returns detailed information about this check */
    getCheckDetails: () => CheckDetails;
    /**
     * Run a check on project data and return any results generated.
     *
     * @param range Section of the project text to evaluate using the check
     * @returns All results, if any, that the check found within the indicated range of the project
     */
    getCheckResults: (range: ScriptureRange) => Promise<CheckRunResult[]>;
  };

  /** Function that creates and returns a new instance of a check */
  export type CheckCreatorFunction = () => Promise<Check>;

  /** Represents a selection of scripture text */
  export type ScriptureRange = {
    /** Location within a project that is the start of the range */
    start: VerseRef;
    /**
     * Location within a project that is the end of the range. If not provided, then the end of the
     * book mentioned in `start` should be assumed.
     */
    end?: VerseRef;
  };

  /** Represents a selection of scripture text to feed into a check */
  export type CheckInputRange = ScriptureRange & {
    /** ID of the project to evaluate using checks */
    projectId: string;
  };

  /**
   * Represents a location within a project document. The `JSONPath` location type is preferred
   * since the data visualization code works with USJ. If the `VerseRef` location type is provided,
   * then the platform will convert it into a `JSONPath` location type which takes extra
   * processing.
   *
   * Practically speaking, this means if a check consumes USJ scripture data, then it should produce
   * `JSONPath`-style locations since it already has the data in USJ form. If a check is processing
   * USFM or USX data (or some other data type), then it probably doesn't have access to the USJ and
   * can just return a `VerseRef`-style location.
   */
  export type CheckLocation =
    | {
        /** JSONPath expression pointing to a location within USJ data */
        jsonPath: string;
        /**
         * Offset to apply to the content inside of the property indicated by `jsonPath` to
         * determine the start of the range.
         *
         * @example Given the following USJ, if the offset is 1, then this is pointing to the "a" in
         * Matthew. If no offset is provided, then the entire object with type "para" is being
         * pointed to.
         *
         * { "type": "para", "marker": "h", "content": [ "Matthew" ] }
         */
        offset?: number;
      }
    | {
        /** Verse reference to a location with the document */
        verseRef: VerseRef;
        /** Offset to apply to start of the verse indicated by `verseRef` */
        offset?: number;
      };

  /** One distinct result reported by a check */
  export type CheckRunResult = {
    /** ID of the check that produced this result */
    checkId?: string;
    /** ID of the project evaluated by the check */
    projectId: string;
    /**
     * Format string or {@link LocalizeKey} of the format string to display regarding the range of
     * text referenced in this result. A format string should be of the form "... {arg1} ... {arg2}
     * ...", where `arg1` and `arg2` are provided in the `formatStringArguments` parameter.
     *
     * @example Not a known name "{name}"
     *
     * @example %extensionName.unknownName%
     */
    messageFormatString: LocalizeKey | string;
    /**
     * Arguments to use with the format string to determine the final string to display in the UI.
     * All properties of the provided object should be represented by text of the form
     * `{propertyName}` within the `messageFormatString` parameter
     *
     * @example {name: Layla}
     */
    formatStringArguments?: { [key: string]: string };
    /** Starting point where the check result applies in the document */
    start: CheckLocation;
    /** Ending point where the check result applies in the document */
    end: CheckLocation;
  };

  // #endregion

  // #region Check Runner Data Types

  /** Details about a check provided by a {@link ICheckRunner} */
  export type CheckRunnerCheckDetails = CheckDetailsWithCheckId & {
    /** List of project IDs that one particular check is enabled to evaluate */
    enabledProjectIds: string[];
  };

  /** Data types provided by a service that runs checks */
  export type CheckRunnerDataTypes = {
    AvailableChecks: DataProviderDataType<undefined, CheckRunnerCheckDetails[], never>;
    ActiveRanges: DataProviderDataType<undefined, CheckInputRange[], CheckInputRange[]>;
    CheckResults: DataProviderDataType<undefined, CheckRunResult[], never>;
  };

  /**
   * All processes that can run checks are expected to implement this type in a data provider
   * registered with object type 'checkRunner'
   */
  export type ICheckRunner = IDataProvider<CheckRunnerDataTypes> & {
    /**
     * Enable the check with the given checkId to run on the given project. Note that no results
     * will be returned unless `getCheckResults` is run before or after the check has been enabled.
     * `getCheckResults` is used to indicate what project content should be checked within each
     * project. `enableCheck` is used to indicate which checks should be enabled on which projects.
     *
     * @returns Warnings from the check that indicate results might not be what the user desires
     */
    enableCheck: (checkId: string, projectId: string) => Promise<string[]>;

    /** Disable the check with the given checkId from producing results for the given project. */
    disableCheck: (checkId: string, projectId?: string) => Promise<void>;
  };

  // #endregion

  // #region Check Hosting (in the Extension Host) Data Types

  /**
   * Service for hosting TS/JS checks inside the extension host that are registered using the
   * command "platformScripture.registerCheck". It eliminates the need for writing an entire
   * {@link ICheckRunner} data provider for a check written in TS/JS, instead providing the ability
   * to create an object of type {@link Check} which is almost entirely just code that implements the
   * logic of taking project data and finding the intended problems. The "hosting service" is itself
   * an {@link ICheckRunner} data provider.
   *
   * Note that checks written in any other language cannot use this service and instead must
   * implement {@link ICheckRunner}s to do what they need.
   */
  export type ICheckHostingService = {
    /** Prepare the service to run checks */
    initialize: () => Promise<void>;
    /** Dispose of the service */
    dispose: () => Promise<boolean>;
    /** Get the actual check runner which can be used to enable/disable checks */
    getCheckRunner: () => Promise<ICheckRunner>;
  };

  // #endregion

  // #region Check Aggregator Data Types

  /**
   * Service that multiplexes/demultiplexes calls across all {@link ICheckRunner} data providers so
   * things like UI only have to talk to a single service to communicate with all
   * {@link ICheckRunner}s.
   *
   * Use the "platformScripture.checkAggregator" data provider name to access the service.
   */
  export type ICheckAggregatorService = ICheckRunner & {
    dataProviderName: string;
  };

  // #endregion

  // #region Paratext Registration info

  /**
   * Paratext registry user information as used in `ParatextData.dll`
   *
   * Equivalent to C# `RegistrationData`
   */
  export type RegistrationData = {
    /** Registration name */
    name: string;
    /** Registration code */
    code: string;
    /** Email address of the user if any */
    email: string;
    /** Name of the user's supporter if any */
    supporterName: string;
  };

  // #endregion
}

declare module 'papi-shared-types' {
  import { UnsubscriberAsync } from 'platform-bible-utils';

  import type {
    IUSFMBookProjectDataProvider,
    IUSFMChapterProjectDataProvider,
    IUSFMVerseProjectDataProvider,
    IUSXBookProjectDataProvider,
    IUSXChapterProjectDataProvider,
    IUSXVerseProjectDataProvider,
    IUSJBookProjectDataProvider,
    IUSJChapterProjectDataProvider,
    IUSJVerseProjectDataProvider,
    IPlainTextVerseProjectDataProvider,
    ICheckAggregatorService,
    ICheckRunner,
    CheckDetails,
    CheckCreatorFunction,
    RegistrationData,
  } from 'platform-scripture';

  export interface ProjectDataProviderInterfaces {
    'platformScripture.USFM_Book': IUSFMBookProjectDataProvider;
    'platformScripture.USFM_Chapter': IUSFMChapterProjectDataProvider;
    'platformScripture.USFM_Verse': IUSFMVerseProjectDataProvider;
    'platformScripture.USX_Book': IUSXBookProjectDataProvider;
    'platformScripture.USX_Chapter': IUSXChapterProjectDataProvider;
    'platformScripture.USX_Verse': IUSXVerseProjectDataProvider;
    'platformScripture.USJ_Book': IUSJBookProjectDataProvider;
    'platformScripture.USJ_Chapter': IUSJChapterProjectDataProvider;
    'platformScripture.USJ_Verse': IUSJVerseProjectDataProvider;
    'platformScripture.PlainText_Verse': IPlainTextVerseProjectDataProvider;
  }

  export interface DataProviders {
    /** Use this to work with checks that are running in any process */
    'platformScripture.checkAggregator': ICheckAggregatorService;
    /** Use this to work with checks that are explicitly hosted in the extension host */
    'platformScripture.extensionHostCheckRunner': ICheckRunner;
  }

  export interface CommandHandlers {
    /**
     * Toggle the `platformScripture.includeMyParatext9Projects` setting on or off
     *
     * @param shouldIncludeMyParatext9Projects Provide this parameter to set it to `true` or `false`
     *   instead of toggling
     * @returns New value of the setting
     */
    'platformScripture.toggleIncludeMyParatext9Projects': (
      shouldIncludeMyParatext9Projects?: boolean,
    ) => Promise<boolean>;
    /**
     * Register a new check so it is runnable. It will not produce any check results until
     * {@link ICheckRunner.enableCheck} is run by something else.
     *
     * Note this only works for checks that run inside the extension host. Checks that run in other
     * processes should implement a {@link ICheckRunner} data provider to be discovered.
     *
     * @param checkDetails Details that will apply to all checks created by `createCheck`
     * @param createCheck Function for creating a new check object
     * @returns Function to run to remove the check registration
     */
    'platformScripture.registerCheck': (
      checkDetails: CheckDetails,
      createCheck: CheckCreatorFunction,
    ) => Promise<UnsubscriberAsync>;

    'platformScripture.openCharactersInventory': (
      projectId?: string | undefined,
    ) => Promise<string | undefined>;

    'platformScripture.openRepeatedWordsInventory': (
      projectId?: string | undefined,
    ) => Promise<string | undefined>;

    'platformScripture.openConfigureChecks': (
      projectId?: string | undefined,
    ) => Promise<string | undefined>;

    'platformScripture.showCheckResults': (
      projectId?: string | undefined,
    ) => Promise<string | undefined>;

    /**
     * Show the Paratext Registration window with which the user can connect to the Paratext
     * Registry
     *
     * @returns Id of the registration web view
     */
    'platformScripture.showParatextRegistration': () => Promise<string | undefined>;
    /**
     * Gets information about user's current Paratext Registry user information in
     * `ParatextData.dll`
     */
    'platformScripture.getParatextRegistrationData': () => Promise<RegistrationData>;
    /**
     * Sets information about user's current Paratext Registry user information in
     * `ParatextData.dll` and restarts the application.
     *
     * @returns If successfully changed registration data
     * @throws If did not successfully change registration data
     */
    'platformScripture.setParatextRegistrationData': (
      newRegistrationData: RegistrationData,
    ) => Promise<void>;
  }

  export interface SettingTypes {
    /**
     * Whether to look in the Paratext 9 project storage folder for Paratext projects to load
     * (Windows only).
     *
     * Located at "C:\My Paratext 9 Projects"
     */
    'platformScripture.includeMyParatext9Projects': boolean;
    /**
     * Whether to show the form to enter Paratext Registration information when the application
     * starts if it has not been entered previously
     */
    'platformScripture.shouldShowOnStartup': boolean;
  }
  export interface ProjectSettingTypes {
    /**
     * Which versification scheme this Scripture project uses
     *
     * WARNING: This setting is an example and needs to be updated to support proper versification
     * specification! For the moment, it simply corresponds to
     * [`ScrVersType`](https://github.com/sillsdev/libpalaso/blob/master/SIL.Scripture/Versification.cs#L1340),
     * but this is not correct and full design.
     */
    'platformScripture.versification': number;
    /**
     * Which books are present in this Scripture project. Represented as a string with 0 or 1 for
     * each possible book by [standardized book
     * code](https://github.com/sillsdev/libpalaso/blob/master/SIL.Scripture/Canon.cs#L226) (123
     * characters long)
     *
     * @example
     * '100111000000000000110000001000000000010111111111111111111111111111000000000000000000000000000000000000000000100000000000000'
     */
    'platformScripture.booksPresent': string;

    'platformScripture.validCharacters': string;

    'platformScripture.invalidCharacters': string;

    'platformScripture.repeatableWords': string;

    'platformScripture.nonRepeatableWords': string;
  }
}
