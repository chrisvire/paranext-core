import { SavedTabInfo, TabInfo } from '@shared/models/docking-framework.model';
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import UpdateIcon from '@mui/icons-material/Update';
import DeleteIcon from '@mui/icons-material/Delete';
import logger from '@shared/services/logger.service';
import { useMemo } from 'react';
import ProjectList, {
  fetchProjects,
  Project,
} from '@renderer/components/projects/project-list.component';
import './download-update-project-tab.component.scss';
import { useLocalizedStrings } from '@renderer/hooks/papi-hooks';

export const TAB_TYPE_DOWNLOAD_UPDATE_PROJECT_DIALOG = 'download-update-project-dialog';

function downloadProject(projectId: string) {
  logger.info(`Downloading Project ${projectId}`);
}

function updateProject(project: Project) {
  logger.info(`Updating Project ${project.name}`);
}

function deleteProject(project: Project) {
  logger.info(`Deleting Project ${project.name}`);
}

export default function DownloadUpdateProjectTab() {
  const downloadableProjectsAriaKey = '%downloadUpdateProjectTab_aria_downloadableProjects%';
  const downloadableProjectsHeaderKey = '%downloadUpdateProjectTab_subheader_downloadableProjects%';
  const downloadedProjectsAriaKey = '%downloadUpdateProjectTab_aria_downloadedProjects%';
  const downloadedProjectsHeaderKey = '%downloadUpdateProjectTab_subheader_downloadedProjects%';
  const deleteListItemKey = '%downloadUpdateProjectTab_listItem_delete%';
  const [localizedStrings] = useLocalizedStrings(
    useMemo(
      () => [
        downloadableProjectsAriaKey,
        downloadableProjectsHeaderKey,
        downloadedProjectsAriaKey,
        downloadedProjectsHeaderKey,
        deleteListItemKey,
      ],
      [],
    ),
  );
  const localizedDownloadableProjectsAria = localizedStrings[downloadableProjectsAriaKey];
  const localizedDownloadableProjectsHeader = localizedStrings[downloadableProjectsHeaderKey];
  const localizedDownloadedProjectsAria = localizedStrings[downloadedProjectsAriaKey];
  const localizedDownloadedProjectsHeader = localizedStrings[downloadedProjectsHeaderKey];
  const localizedDeleteListItem = localizedStrings[deleteListItemKey];

  const [downloadableProjects, downloadedProjects] = useMemo(() => {
    const projects = fetchProjects();
    return [
      projects.filter((project) => project.isDownloadable && !project.isDownloaded),
      projects.filter((project) => project.isDownloaded),
    ];
  }, []);

  return (
    <div className="download-update-project-dialog">
      <nav aria-label={localizedDownloadableProjectsAria}>
        <ProjectList
          projects={downloadableProjects}
          subheader={localizedDownloadableProjectsHeader}
          handleSelectProject={downloadProject}
        >
          <ListItemIcon>
            <DownloadIcon />
          </ListItemIcon>
        </ProjectList>
      </nav>

      <nav aria-label={localizedDownloadedProjectsAria}>
        <List>
          <ListSubheader>{localizedDownloadedProjectsHeader}</ListSubheader>
          {downloadedProjects.map((project) => (
            <ListItem key={project.id}>
              <ListItemButton onClick={() => updateProject(project)}>
                <ListItemIcon>
                  <UpdateIcon />
                </ListItemIcon>
                <ListItemText primary={project.name} />
              </ListItemButton>
              <ListItemButton onClick={() => deleteProject(project)}>
                <ListItemIcon>
                  <DeleteIcon />
                </ListItemIcon>
                <ListItemText primary={localizedDeleteListItem} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </nav>
    </div>
  );
}

export const loadDownloadUpdateProjectTab = (savedTabInfo: SavedTabInfo): TabInfo => {
  return {
    ...savedTabInfo,
    tabTitle: '%downloadUpdateProjectTab_title_downloadSlashUpdateProject%',
    content: <DownloadUpdateProjectTab />,
  };
};
