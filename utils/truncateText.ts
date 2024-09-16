// utils/truncateText.ts
export function truncateText(text: string, length: number): string {
    if (text.length <= length) return text;
    return text.slice(0, length) + '...';
  }
  