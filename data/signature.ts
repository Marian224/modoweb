export type SignatureDish = {
  index: string;
  name: string;
  description: string;
  image: string;
  alt: string;
};

export const signatureDishes: SignatureDish[] = [
  {
    index: '01',
    name: 'Dry-Aged Sirloin',
    description: 'Bone marrow, shallot ash, aged red wine reduction.',
    image:
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1400&q=80',
    alt: 'Dry-aged sirloin steak plated with dark jus and herbs on a dark ceramic plate',
  },
  {
    index: '02',
    name: 'Charred Octopus',
    description: 'Smoked paprika, confit potato, lemon oil.',
    image:
      'https://images.unsplash.com/photo-1559847844-5315695dadae?w=1400&q=80',
    alt: 'Charred octopus dish with smoked paprika oil on dark plate',
  },
  {
    index: '03',
    name: 'Truffle Pasta',
    description: 'Hand-cut tagliolini, aged parmesan, black truffle.',
    image:
      'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=1400&q=80',
    alt: 'Fresh truffle pasta with shaved black truffle and parmesan',
  },
];
