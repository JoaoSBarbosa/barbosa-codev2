import type { ChangeEventHandler, InputHTMLAttributes, ReactNode, TextareaHTMLAttributes } from "react";

type BaseFieldProps = {
  icon: ReactNode;
  label: string;
  name: string;
};

type InputFieldProps = BaseFieldProps &
  InputHTMLAttributes<HTMLInputElement> & {
    kind?: "input";
    onChange: ChangeEventHandler<HTMLInputElement>;
  };

type TextareaFieldProps = BaseFieldProps &
  TextareaHTMLAttributes<HTMLTextAreaElement> & {
    kind: "textarea";
    onChange: ChangeEventHandler<HTMLTextAreaElement>;
  };

type ContactFieldProps = InputFieldProps | TextareaFieldProps;

const fieldClasses =
  "w-full rounded-lg border border-border bg-background px-11 py-3 text-foreground shadow-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20";

export function ContactField({ icon, label, kind = "input", name, ...props }: ContactFieldProps) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-foreground">{label}</span>
      <span className="relative block">
        <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">
          {icon}
        </span>
        {kind === "textarea" ? (
          <textarea
            {...(props as TextareaHTMLAttributes<HTMLTextAreaElement>)}
            name={name}
            className={`${fieldClasses} min-h-36 resize-y`}
          />
        ) : (
          <input
            {...(props as InputHTMLAttributes<HTMLInputElement>)}
            name={name}
            className={fieldClasses}
          />
        )}
      </span>
    </label>
  );
}
