// Demo menu content for the MODO fictional restaurant project.
// All dishes, descriptions and prices below are illustrative placeholder
// content created for portfolio purposes and do not reflect a real menu.

export type MenuItem = {
  name: string;
  description: string;
  price: string;
};

export type MenuCategory = {
  id: string;
  label: string;
  items: MenuItem[];
};

export const menuCategories: MenuCategory[] = [
  {
    id: 'starters',
    label: 'Starters',
    items: [
      {
        name: 'Burrata',
        description: 'roasted tomato / basil / olive oil',
        price: '42 PLN',
      },
      {
        name: 'Beef Tartare',
        description: 'capers / mustard / brioche',
        price: '49 PLN',
      },
      {
        name: 'Scallop Ceviche',
        description: 'citrus / chili oil / coriander',
        price: '54 PLN',
      },
      {
        name: 'Charred Octopus',
        description: 'smoked paprika / potato / lemon',
        price: '57 PLN',
      },
    ],
  },
  {
    id: 'mains',
    label: 'Mains',
    items: [
      {
        name: 'Duck Breast',
        description: 'beetroot / cherry jus / hazelnut',
        price: '89 PLN',
      },
      {
        name: 'Sea Bass',
        description: 'fennel / brown butter / samphire',
        price: '94 PLN',
      },
      {
        name: 'Dry-Aged Sirloin',
        description: 'bone marrow / shallot / red wine',
        price: '118 PLN',
      },
      {
        name: 'Wild Mushroom Risotto',
        description: 'aged parmesan / thyme / brown butter',
        price: '72 PLN',
      },
    ],
  },
  {
    id: 'pasta',
    label: 'Pasta',
    items: [
      {
        name: 'Truffle Pasta',
        description: 'parmesan / black truffle / butter',
        price: '58 PLN',
      },
      {
        name: 'Tagliatelle Ragù',
        description: 'slow-braised beef / rosemary / pecorino',
        price: '54 PLN',
      },
      {
        name: 'Lobster Ravioli',
        description: 'brown butter / sage / lemon zest',
        price: '68 PLN',
      },
    ],
  },
  {
    id: 'desserts',
    label: 'Desserts',
    items: [
      {
        name: 'Chocolate',
        description: 'dark chocolate / sea salt / vanilla',
        price: '32 PLN',
      },
      {
        name: 'Burnt Basque Cheesecake',
        description: 'caramel / fleur de sel',
        price: '34 PLN',
      },
      {
        name: 'Poached Pear',
        description: 'mulled wine / mascarpone / walnut',
        price: '30 PLN',
      },
    ],
  },
  {
    id: 'drinks',
    label: 'Drinks',
    items: [
      {
        name: 'Natural Wine, Glass',
        description: 'rotating selection / ask your server',
        price: '28 PLN',
      },
      {
        name: 'MODO Old Fashioned',
        description: 'bourbon / bitters / orange oil',
        price: '38 PLN',
      },
      {
        name: 'Espresso Martini',
        description: 'vodka / espresso / cacao',
        price: '38 PLN',
      },
      {
        name: 'House Filtered Water',
        description: 'still or sparkling',
        price: '12 PLN',
      },
    ],
  },
];
