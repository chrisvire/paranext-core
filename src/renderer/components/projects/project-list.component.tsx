import { List, ListItem, ListItemButton, ListItemText, ListSubheader } from '@mui/material';
import { ProjectMetadata } from '@shared/models/project-metadata.model';
import { Checkbox } from 'platform-bible-react';
import { ProjectInterfaces } from 'papi-shared-types';
import { PropsWithChildren, useCallback, JSX } from 'react';

export type Project = ProjectMetadata & {
  id: string;
  name: string;
  description: string;
  isDownloadable: boolean;
  isDownloaded: boolean;
};

/**
 * Get sample project data.
 *
 * This is mock data and will be replaced at some point. Probably by the following issues:
 *
 * [Projects: get list of project settings · Issue #368 ·
 * paranext/paranext-core](https://github.com/paranext/paranext-core/issues/368)
 *
 * [Projects: Support registering Downloadable Project Provider · Issue #372 ·
 * paranext/paranext-core](https://github.com/paranext/paranext-core/issues/372)
 *
 * @returns Downloadable (and downloaded) project information
 */
export function fetchProjects(): Project[] {
  /* eslint-disable no-type-assertion/no-type-assertion */
  return [
    {
      id: 'project-1',
      name: 'Project 1',
      description: 'Description of project 1',
      isDownloadable: true,
      isDownloaded: false,
      projectInterfaces: ['test' as ProjectInterfaces],
      pdpFactoryInfo: {
        'test-pdpf': {
          projectInterfaces: ['test' as ProjectInterfaces],
        },
      },
    },
    {
      id: 'project-2',
      name: 'Project 2',
      description: 'Description of project 2',
      isDownloadable: false,
      isDownloaded: true,
      projectInterfaces: ['test' as ProjectInterfaces],
      pdpFactoryInfo: {
        'test-pdpf': {
          projectInterfaces: ['test' as ProjectInterfaces],
        },
      },
    },
    {
      id: 'project-3',
      name: 'Project 3',
      description: 'Description of project 3',
      isDownloadable: true,
      isDownloaded: false,
      projectInterfaces: ['test' as ProjectInterfaces],
      pdpFactoryInfo: {
        'test-pdpf': {
          projectInterfaces: ['test' as ProjectInterfaces],
        },
      },
    },
    {
      id: 'project-4',
      name: 'Project 4',
      description: 'Description of project 4',
      isDownloadable: false,
      isDownloaded: false,
      projectInterfaces: ['test' as ProjectInterfaces],
      pdpFactoryInfo: {
        'test-pdpf': {
          projectInterfaces: ['test' as ProjectInterfaces],
        },
      },
    },
    {
      id: 'project-5',
      name: 'Project 5',
      description: 'Description of project 5',
      isDownloadable: false,
      isDownloaded: true,
      projectInterfaces: ['test' as ProjectInterfaces],
      pdpFactoryInfo: {
        'test-pdpf': {
          projectInterfaces: ['test' as ProjectInterfaces],
        },
      },
    },
  ];
  /* eslint-enable */
}

export type ProjectListProps = PropsWithChildren<{
  /** Projects to display in the list */
  projects: ProjectMetadata[];

  /** Handler to perform an action when the project is clicked */
  handleSelectProject: (projectId: string) => void;

  /** Optional flag to set the list to multiselect */
  isMultiselect?: boolean;

  /**
   * If multiselect is selected, then the array of selected project IDs is passed to control the
   * selected flag on ListItemButton
   */
  selectedProjectIds?: string[] | undefined;

  /** Optional subheader */
  subheader?: string;

  /** Adds a checkbox to the end of each list item that reflects the selected state of each project */
  isCheckable?: boolean;
}>;

/**
 * Project List component that creates a list for a provided array of projects. Assumes there is
 * only one button per project.
 *
 * @param ProjectListProps And any children elements
 * @returns <ProjectList />
 */
export default function ProjectList({
  projects,
  handleSelectProject,
  isMultiselect,
  selectedProjectIds,
  subheader,
  isCheckable,
  children,
}: ProjectListProps) {
  const isSelected = useCallback(
    (project: ProjectMetadata) => {
      if (isMultiselect && selectedProjectIds) {
        return selectedProjectIds.includes(project.id);
      }
      return undefined;
    },
    [isMultiselect, selectedProjectIds],
  );

  const createListItemContents = (project: ProjectMetadata): JSX.Element => {
    return (
      <ListItemButton
        selected={isSelected(project)}
        onClick={() => handleSelectProject(project.id)}
      >
        {children}
        <ListItemText primary={project.name} />
        {isCheckable && <Checkbox isChecked={isSelected(project)} />}
      </ListItemButton>
    );
  };

  return (
    <div className="project-list">
      <List>
        <ListSubheader>{subheader}</ListSubheader>
        {projects.map((project) => (
          <ListItem key={project.id}>{createListItemContents(project)}</ListItem>
        ))}
      </List>
    </div>
  );
}
