import { colors } from './JS/colors.js';
import { fonts } from './JS/fonts.js';

function createCSSFramework() {
  const styles = [];

  // Add default styles for all elements
  function addDefaultStyles() {
    styles.push(
      '* { position: relative; box-sizing: border-box; z-index: 0; height: auto; width: auto; margin: 0; padding: 0; }'
    );
  }

  // Convert camelCase to kebab-case
  function toKebabCase(str) {
    return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  }

  // Generate CSS rule from class name and properties
  function generateStyleClass(name, properties) {
    let rule = `.${name} {`;
    for (const [key, value] of Object.entries(properties)) {
      rule += `${toKebabCase(key)}: ${value};`;
    }
    rule += '}';
    styles.push(rule);
  }

  // Parse unit values or default to x*4px
  function parseUnit(value) {
    return /^\d+(\.\d+)?(px|em|%)?$/.test(value) ? value : `${value * 4}px`;
  }

  function createClasses() {
    // Default styles
    addDefaultStyles();

    // Height
    generateStyleClass('h-full', { height: '100%' });
    generateStyleClass('h-half', { height: '50%' });
    for (let i = 1; i <= 100; i++) {
      generateStyleClass(`h-${i}`, { height: `${i * 4}px` });
      generateStyleClass(`min-h-${i}`, { 'min-height': `${i * 4}px` });
    }

    // Width
    generateStyleClass('w-full', { width: '100%' });
    generateStyleClass('w-half', { width: '50%' });
    for (let i = 1; i <= 100; i++) {
      generateStyleClass(`w-${i}`, { width: `${i * 4}px` });
      generateStyleClass(`min-w-${i}`, { 'min-width': `${i * 4}px` });
    }
    generateStyleClass('max-w-half', { 'max-width': '50%' });

    // Z-Index
    for (let i = 1; i <= 10; i++) {
      generateStyleClass(`z-u-${i}`, { 'z-index': i });
      generateStyleClass(`z-d-${i}`, { 'z-index': -i });
    }

    // Positioning
    ['left', 'right', 'top', 'bottom'].forEach((prop) => {
      for (let i = 1; i <= 100; i++) {
        generateStyleClass(`${prop}-x`, { [prop]: `${i * 4}px` });
      }
    });

    // Position types
    ['absolute', 'fixed', 'sticky'].forEach((pos) => {
      generateStyleClass(`pos-${pos.charAt(0)}`, { position: pos });
    });

    // Padding
    for (let i = 1; i <= 100; i++) {
      generateStyleClass(`p-${i}`, { padding: `${i * 4}px` });
      generateStyleClass(`px-${i}`, {
        'padding-left': `${i * 4}px`,
        'padding-right': `${i * 4}px`,
      });
      generateStyleClass(`py-${i}`, {
        'padding-top': `${i * 4}px`,
        'padding-bottom': `${i * 4}px`,
      });
    }

    // Margin
    for (let i = 1; i <= 100; i++) {
      generateStyleClass(`m-${i}`, { margin: `${i * 4}px` });
      generateStyleClass(`mx-${i}`, {
        'margin-left': `${i * 4}px`,
        'margin-right': `${i * 4}px`,
      });
      generateStyleClass(`my-${i}`, {
        'margin-top': `${i * 4}px`,
        'margin-bottom': `${i * 4}px`,
      });
    }

    // Border
    generateStyleClass('border-1', { border: '1px solid' });
    generateStyleClass('border-2', { border: '2px solid' });
    generateStyleClass('border-4', { border: '4px solid' });
    generateStyleClass('border-none', { border: 'none' });

    // Border Radius
    for (let i = 1; i <= 10; i++) {
      generateStyleClass(`rounded-${i}`, { 'border-radius': `${i * 4}px` });
    }

    // Aspect Ratio
    generateStyleClass('aspect-auto', { 'aspect-ratio': 'auto' });
    generateStyleClass('aspect-square', { 'aspect-ratio': '1 / 1' });
    generateStyleClass('aspect-video', { 'aspect-ratio': '16 / 9' });

    // Background Colors
    Object.entries(colors).forEach(([className, colorValue]) => {
      generateStyleClass(className, { 'background-color': colorValue });
    });

    // Centering
    generateStyleClass('center', {
      margin: 'auto',
      top: '50%',
      transform: 'translateY(-50%)',
    });
    generateStyleClass('center-x', { margin: 'auto' });
    generateStyleClass('center-y', {
      top: '50%',
      transform: 'translateY(-50%)',
    });

    // Flexbox
    generateStyleClass('flex', { display: 'flex' });
    generateStyleClass('flex-center', {
      display: 'flex',
      'justify-content': 'center',
      'align-items': 'center',
    });
    generateStyleClass('jcc', { 'justify-content': 'center' });
    generateStyleClass('jca', { 'justify-content': 'space-around' });
    generateStyleClass('jcb', { 'justify-content': 'space-between' });
    generateStyleClass('jce', { 'justify-content': 'space-evenly' });
    generateStyleClass('aic', { 'align-items': 'center' });

    // Grid
    generateStyleClass('grid', { display: 'grid' });
    generateStyleClass('grid-center', {
      display: 'grid',
      'place-items': 'center',
    });
    generateStyleClass('grid-col', {
      display: 'grid',
      'grid-auto-flow': 'column',
    });
    generateStyleClass('grid-row', {
      display: 'grid',
      'grid-auto-flow': 'row',
    });

    // Scroll
    generateStyleClass('hide-scroll', { overflow: 'hidden' });
    generateStyleClass('hide-scroll-x', { 'overflow-x': 'hidden' });
    generateStyleClass('hide-scroll-y', { 'overflow-y': 'hidden' });

    // Filters
    for (let i = 1; i <= 10; i++) {
      generateStyleClass(`blur-${i}`, { filter: `blur(${i * 4}px)` });
      generateStyleClass(`backblur-${i}`, {
        'backdrop-filter': `blur(${i * 4}px)`,
      });
    }

    // Shadow
    for (let i = 1; i <= 10; i++) {
      generateStyleClass(`shadow-${i}`, {
        'box-shadow': `${i * 4}px ${i * 4}px ${i * 4}px rgba(0, 0, 0, 0.5)`,
      });
    }

    // Opacity
    for (let i = 0; i <= 1; i += 0.1) {
      generateStyleClass(`opacity-${i.toFixed(1)}`, { opacity: i });
    }

    // Size
    for (let i = 1; i <= 100; i++) {
      generateStyleClass(`size-${i}`, {
        width: `${i * 4}px`,
        height: `${i * 4}px`,
      });
    }
    generateStyleClass('size-full', {
      width: '100%',
      height: '100%',
    });

    // Min and Max Size
    generateStyleClass('min-size-full', {
      'min-width': '100%',
      'min-height': '100%',
    });
    generateStyleClass('min-size-half', {
      'min-width': '50%',
      'min-height': '50%',
    });
    generateStyleClass('max-size-full', {
      'max-width': '100%',
      'max-height': '100%',
    });
    generateStyleClass('max-size-half', {
      'max-width': '50%',
      'max-height': '50%',
    });

    // Font Size
    for (let i = 1; i <= 40; i += 2) {
      generateStyleClass(`font-s-${i}`, { 'font-size': `${i * 4}px` });
    }

    // Font Family
    Object.entries(fonts).forEach(([className, fontFamily]) => {
      generateStyleClass(className, { 'font-family': fontFamily });
    });

    return styles.join('\n');
  }

  // Create and append style sheet
  const styleSheet = document.createElement('style');
  styleSheet.type = 'text/css';
  styleSheet.innerText = createClasses();
  document.head.appendChild(styleSheet);
}

document.addEventListener('DOMContentLoaded', createCSSFramework);
