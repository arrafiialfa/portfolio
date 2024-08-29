import {
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";

interface TechIcon {
  id: number;
  name: string;
  type: 'fontawesome' | 'img' | 'text',
  source?: IconDefinition | string,
  className?: string;
}
export interface IExperience {
  id: number;
  position: string;
  company: string;
  description: string[];
  techIcon?: TechIcon[];
  timeline?: string;
}

export interface IProject {
  id: number;
  projectName: string;
  description: string[];
  techIcon?: TechIcon[];
  timeline?: string;
  repository?: string;
  preview?: string;
  readMore?: string
  demo?: string;
}





