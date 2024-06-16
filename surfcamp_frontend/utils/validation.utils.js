// client validation
export function allDataFilledIn(formData) {
  return Object.keys(formData).every((key) => formData[key].length > 0);
}