export interface ToggleOption {
  label: string;
  code: string;
}

export interface StepData {
  id: number;
  title: string;
  description: string;
  codeSnippet: string; // Used for static code blocks
  type: 'code' | 'download' | 'toggle' | 'handoff';
  downloadFileName?: string;
  toggleContent?: ToggleOption[]; // Used for toggleable content
}