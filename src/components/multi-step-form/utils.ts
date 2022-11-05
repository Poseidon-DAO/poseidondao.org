import { ISectionProps } from "./components";
import { IFormConfig } from "./MultiStepForm";

export function overrideFormConfigSection({
  config,
  sectionId,
  newValue,
}: {
  config: IFormConfig;
  sectionId: string;
  newValue: Record<keyof ISectionProps, any>;
}) {
  const newSections = config.sections.map((s) =>
    s.id === sectionId ? { ...s, ...newValue } : s
  );

  return {
    ...config,
    sections: newSections,
  };
}
