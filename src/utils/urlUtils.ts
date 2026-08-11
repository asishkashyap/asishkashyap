export function formatLinkedInUrl(rawInput: string): string {
  if (!rawInput) return 'https://www.linkedin.com/in/asish-k-23631115/';
  const trimmed = rawInput.trim();
  if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) {
    return trimmed;
  }
  // Strip any leading slashes or in/ prefix
  const cleanHandle = trimmed.replace(/^\/+/, '').replace(/^in\//, '').replace(/\/+$/, '');
  return `https://www.linkedin.com/in/${cleanHandle}/`;
}

export function formatTwitterUrl(rawInput: string): string {
  if (!rawInput) return 'https://x.com/asishkashyap';
  const trimmed = rawInput.trim();
  if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) {
    return trimmed;
  }
  const cleanHandle = trimmed.replace(/^@/, '').replace(/^\/+/, '');
  return `https://x.com/${cleanHandle}`;
}
