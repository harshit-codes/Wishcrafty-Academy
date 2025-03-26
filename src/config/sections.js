import { OverviewIcon, TeachingIcon, ToolsIcon, PricingIcon, FaqIcon } from '../components/SectionIcons';

// Define the Home icon directly here for consistency
const HomeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
    <polyline points="9 22 9 12 15 12 15 22"></polyline>
  </svg>
);

// Define all the sections in the application
export const ALL_SECTIONS = [
  {
    id: 'home',
    name: 'Home',
    icon: HomeIcon,
    hidden: true // Home is hidden from the navigation menu
  },
  {
    id: 'overview',
    name: 'Program Overview',
    icon: OverviewIcon,
    hidden: false
  },
  {
    id: 'teaching',
    name: 'Teaching Methodology',
    icon: TeachingIcon,
    hidden: false
  },
  {
    id: 'tools',
    name: 'Tools & Tech',
    icon: ToolsIcon,
    hidden: false
  },
  {
    id: 'pricing',
    name: 'Program Fee',
    icon: PricingIcon,
    hidden: false
  },
  {
    id: 'faq',
    name: 'FAQs',
    icon: FaqIcon,
    hidden: false
  }
];

// Get only the navigation sections (excludes hidden ones)
export const getNavigationSections = () => {
  return ALL_SECTIONS.filter(section => !section.hidden);
};

// Get all section IDs for tracking purposes
export const getAllSectionIds = () => {
  return ALL_SECTIONS.map(section => section.id);
};
