export const setDocumentTitle = (title: string): void => {
  if (typeof window !== 'undefined') {
    document.title = title
  }
}
