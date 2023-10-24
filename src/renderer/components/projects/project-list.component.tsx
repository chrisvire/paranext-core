import { List, ListItem, ListItemButton, ListItemText, ListSubheader } from '@mui/material';
import { ProjectMetadata } from '@shared/models/project-metadata.model';
import { Checkbox } from 'papi-components';
import { ProjectTypes } from 'papi-shared-types';
import { PropsWithChildren, useCallback, useState, JSX } from 'react';

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
 * [Projects: get list of project settings · Issue #368 · paranext/paranext-core](https://github.com/paranext/paranext-core/issues/368)
 *
 * [Projects: Support registering Downloadable Project Provider · Issue #372 · paranext/paranext-core](https://github.com/paranext/paranext-core/issues/372)
 *
 * @returns downloadable (and downloaded) project information
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
      storageType: 'test',
      projectType: 'test' as ProjectTypes,
    },
    {
      id: 'project-2',
      name: 'Project 2',
      description: 'Description of project 2',
      isDownloadable: false,
      isDownloaded: true,
      storageType: 'test',
      projectType: 'test' as ProjectTypes,
    },
    {
      id: 'project-3',
      name: 'Project 3',
      description: 'Description of project 3',
      isDownloadable: true,
      isDownloaded: false,
      storageType: 'test',
      projectType: 'test' as ProjectTypes,
    },
    {
      id: 'project-4',
      name: 'Project 4',
      description: 'Description of project 4',
      isDownloadable: false,
      isDownloaded: false,
      storageType: 'test',
      projectType: 'test' as ProjectTypes,
    },
    {
      id: 'project-5',
      name: 'Project 5',
      description: 'Description of project 5',
      isDownloadable: false,
      isDownloaded: true,
      storageType: 'test',
      projectType: 'test' as ProjectTypes,
    },
  ];
  /* eslint-enable */
}

export type ProjectListProps = PropsWithChildren<{
  /**
   * Projects to display in the list
   */
  projects: ProjectMetadata[];

  /**
   * Handler to perform an action when the project is clicked
   */
  handleSelectProject: (projectId: string) => void;

  /**
   * Optional flag to set the list to multiselect
   */
  isMultiselect?: boolean;

  /**
   * If multiselect is selected, then the array of selected projects is passed to control
   *  the selected flag on ListItemButton
   */
  selectedProjects?: ProjectMetadata[] | undefined;

  /**
   * Optional subheader
   */
  subheader?: string;

  /**
   * Adds a checkbox to the end of each list item that reflects the selected state of
   * each project
   */
  isCheckable?: boolean;
}>;

/**
 * Project List component that creates a list for a provided array of projects. Assumes there is only one button per project.
 * @param ProjectListProps and any children elements
 * @returns <ProjectList />
 */
export default function ProjectList({
  projects,
  handleSelectProject,
  isMultiselect,
  selectedProjects,
  subheader,
  isCheckable,
  children,
}: ProjectListProps) {
  const isSelected = useCallback(
    (project: ProjectMetadata) => {
      if (isMultiselect && selectedProjects) {
        return selectedProjects.includes(project);
      }
      return undefined;
    },
    [isMultiselect, selectedProjects],
  );

  const [checked, setChecked] = useState([-1]);

  /* This function is based off of an example on https://mui.com/material-ui/react-list/ */
  const handleToggle = (value: number, projectId: string) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
    handleSelectProject(projectId);
  };

  const createListItemContents = (project: ProjectMetadata, index: number): JSX.Element => {
    if (!isCheckable) {
      return (
        <ListItemButton
          selected={isSelected(project)}
          onClick={() => handleSelectProject(project.id)}
        >
          {children}
          <ListItemText primary={project.name} />
        </ListItemButton>
      );
    }
    return (
      <ListItemButton role={undefined} onClick={handleToggle(index, project.id)}>
        {children}
        <ListItemText id={project.name} primary={project.name} />
        <Checkbox isChecked={checked.indexOf(index) !== -1} />
      </ListItemButton>
    );
  };

  return (
    <div className="project-list">
      <List>
        <ListSubheader>{subheader}</ListSubheader>
        {projects.map((project, index) => (
          <ListItem key={project.id}>{createListItemContents(project, index)}</ListItem>
        ))}
      </List>
    </div>
  );
}
