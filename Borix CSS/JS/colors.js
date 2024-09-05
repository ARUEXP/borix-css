// You dont need to link this file, only borix.js need be linked
// colors.js

export const colors = {
  // Slate
  'bg-slate-50': '#f8fafc',
  'bg-slate-100': '#f1f5f9',
  'bg-slate-200': '#e2e8f0',
  'bg-slate-300': '#cbd5e1',
  'bg-slate-400': '#94a3b8',
  'bg-slate-500': '#64748b',
  'bg-slate-600': '#475569',
  'bg-slate-700': '#334155',
  'bg-slate-800': '#1e293b',
  'bg-slate-900': '#0f172a',

  // Gray
  'bg-gray-50': '#f9fafb',
  'bg-gray-100': '#f3f4f6',
  'bg-gray-200': '#e5e7eb',
  'bg-gray-300': '#d1d5db',
  'bg-gray-400': '#9ca3af',
  'bg-gray-500': '#6b7280',
  'bg-gray-600': '#4b5563',
  'bg-gray-700': '#374151',
  'bg-gray-800': '#1f2937',
  'bg-gray-900': '#111827',

  // Red
  'bg-red-50': '#fef2f2',
  'bg-red-100': '#fee2e2',
  'bg-red-200': '#fecaca',
  'bg-red-300': '#fda4af',
  'bg-red-400': '#fb7185',
  'bg-red-500': '#f43f5e',
  'bg-red-600': '#e11d48',
  'bg-red-700': '#be123c',
  'bg-red-800': '#9f1239',
  'bg-red-900': '#720f2f',

  // Yellow
  'bg-yellow-50': '#fffbeb',
  'bg-yellow-100': '#fef3c7',
  'bg-yellow-200': '#fde68a',
  'bg-yellow-300': '#fcd34d',
  'bg-yellow-400': '#fbbf24',
  'bg-yellow-500': '#f59e0b',
  'bg-yellow-600': '#d97706',
  'bg-yellow-700': '#b45309',
  'bg-yellow-800': '#92400e',
  'bg-yellow-900': '#78350f',

  // Green
  'bg-green-50': '#f0fdf4',
  'bg-green-100': '#dcfce7',
  'bg-green-200': '#bbf7d0',
  'bg-green-300': '#86efac',
  'bg-green-400': '#4ade80',
  'bg-green-500': '#22c55e',
  'bg-green-600': '#16a34a',
  'bg-green-700': '#15803d',
  'bg-green-800': '#166534',
  'bg-green-900': '#14532d',

  // Blue
  'bg-blue-50': '#eff6ff',
  'bg-blue-100': '#dbeafe',
  'bg-blue-200': '#bfdbfe',
  'bg-blue-300': '#93c5fd',
  'bg-blue-400': '#60a5fa',
  'bg-blue-500': '#3b82f6',
  'bg-blue-600': '#2563eb',
  'bg-blue-700': '#1d4ed8',
  'bg-blue-800': '#1e40af',
  'bg-blue-900': '#1e3a8a',

  // Indigo
  'bg-indigo-50': '#eef2ff',
  'bg-indigo-100': '#e0e7ff',
  'bg-indigo-200': '#c7d2fe',
  'bg-indigo-300': '#a5b4fc',
  'bg-indigo-400': '#818cf8',
  'bg-indigo-500': '#6366f1',
  'bg-indigo-600': '#4f46e5',
  'bg-indigo-700': '#4338ca',
  'bg-indigo-800': '#3730a3',
  'bg-indigo-900': '#312e81',

  // Purple
  'bg-purple-50': '#f5f3ff',
  'bg-purple-100': '#ede9fe',
  'bg-purple-200': '#ddd6fe',
  'bg-purple-300': '#c4b5fd',
  'bg-purple-400': '#a855f7',
  'bg-purple-500': '#9333ea',
  'bg-purple-600': '#7e22ce',
  'bg-purple-700': '#6b21a8',
  'bg-purple-800': '#581c87',
  'bg-purple-900': '#4c1d95',

  // Pink
  'bg-pink-50': '#fdf2f8',
  'bg-pink-100': '#fce7f3',
  'bg-pink-200': '#fbcfe8',
  'bg-pink-300': '#f9a8d4',
  'bg-pink-400': '#f472b6',
  'bg-pink-500': '#ec4899',
  'bg-pink-600': '#db2777',
  'bg-pink-700': '#be185d',
  'bg-pink-800': '#9d174d',
  'bg-pink-900': '#831843',
};

// Function to apply colors to the document
export function applyColors() {
  const style = document.createElement('style');
  let css = '';

  Object.entries(colors).forEach(([className, color]) => {
    css += `.${className} { background-color: ${color}; }\n`;
  });

  style.textContent = css;
  document.head.appendChild(style);
}
