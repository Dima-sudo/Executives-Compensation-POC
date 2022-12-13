export const companies = [
    'Microsoft',
    'Tesla',
    'Google',
    'Intel',
    'AMD',
    'ARM',
    'Nvidia',
    'Samsung',
    'LG',
    'Asus',
    'Lenovo',
];

export const positions = [
    'CEO',
    'CFO',
    'VP R&D',
    'VP Product',
    'VP HR',
    'Group Manager',
    'R&D Team Leader',
    'Product Manager',
    'HR Manager',
];

export const getRandomValue = (power: number) =>
    Math.floor(Math.random() * 1000 ** power);
