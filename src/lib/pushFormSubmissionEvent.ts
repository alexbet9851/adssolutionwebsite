type FormSubmissionEvent = {
  event: "form_submission";
  form_name: string;
};

export function pushFormSubmissionEvent(formName: string): void {
  if (typeof window === "undefined") return;

  const payload: FormSubmissionEvent = {
    event: "form_submission",
    form_name: formName,
  };

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);

  console.log("Conversion event pushed to dataLayer", payload);
}
