import { StateInterface } from 'shared/interfaces';

export interface ProjectState extends StateInterface {
  history: any;
  comment?: string;
  id: string;
  diagrams: any;
  pathUrl?: string;
}

interface RootReducer {
  getProject: ProjectState;
}

interface RootState {
  project: RootReducer;
}

export default RootState;
