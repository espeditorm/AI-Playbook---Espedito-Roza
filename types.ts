// Interfaces usadas apenas para documentação no código (removido export para compatibilidade global)
interface ToggleOption {
  label: string;
  code: string;
}

interface StepData {
  id: number;
  title: string;
  description: string;
  codeSnippet: string;
  type: 'code' | 'download' | 'toggle' | 'handoff';
  downloadFileName?: string;
  toggleContent?: ToggleOption[];
}