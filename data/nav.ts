export type NavItem = {
  index: string;
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { index: '01', label: 'Menu', href: '#menu' },
  { index: '02', label: 'Experience', href: '#experience' },
  { index: '03', label: 'Space', href: '#space' },
  { index: '04', label: 'Chef', href: '#chef' },
  { index: '05', label: 'Contact', href: '#reservation' },
];

// Sections tracked by the right-hand signature scroll indicator.
export const indicatorItems: NavItem[] = [
  { index: '01', label: 'Menu', href: '#menu' },
  { index: '02', label: 'Experience', href: '#experience' },
  { index: '03', label: 'Space', href: '#space' },
  { index: '04', label: 'Reserve', href: '#reservation' },
];
