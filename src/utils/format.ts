export function formatPhoneNumber(value: string): string {
  const cleaned = value.replace(/\D/g, "").slice(0, 11);

  if (cleaned.length <= 10) {
    return cleaned.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
  }

  return cleaned.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
}
