type SubmitLeadFormInput = {
  name: string;
  phone: string;
  comment: string;
};

export async function submitLeadForm(input: SubmitLeadFormInput): Promise<boolean> {
  try {
    const response = await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(input),
    });

    if (!response.ok) {
      const errorPayload = await response.json().catch(() => null);
      console.error("Form submission failed:", response.status, errorPayload);
      return false;
    }

    return true;
  } catch (error) {
    console.error("Form submission failed:", error);
    return false;
  }
}
