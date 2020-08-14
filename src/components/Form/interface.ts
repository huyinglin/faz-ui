export interface FormProps {

  className: string;

  style: React.CSSProperties;

  children: React.ReactNode;

  colon: boolean;

  space: { label: string | number; element: string | number; };

  initialValues: { [label: string]: any };

  onFinish: (e: React.FormEvent) => void;

  onFinishFailed: (e: React.FormEvent) => void;

  onLabelChange: (changedLabel: any, allLabels: any) => void;
}

export interface FormLabelProps {

}

export interface FormStoreProps {

}

export interface FormContextProps {

}
