const products = [
  {
    id: '1',
    categoryId: '1',
    title: 'Еспресо',
    imageUrl:
      'https://images.unsplash.com/photo-1579992357154-faf4bde95b3d?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: '35',
    rating: '4.8',
  },
  {
    id: '2',
    categoryId: '1',
    title: 'Американо',
    imageUrl:
      'https://images.unsplash.com/photo-1580661869408-55ab23f2ca6e?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: '40',
    rating: '4.6',
  },
  {
    id: '3',
    categoryId: '1',
    title: 'Латте',
    imageUrl:
      'https://images.unsplash.com/photo-1593443320739-77f74939d0da?q=80&w=1336&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: '50',
    rating: '4.9',
  },
  {
    id: '4',
    categoryId: '1',
    title: 'Капучино',
    imageUrl:
      'https://images.unsplash.com/photo-1534687941688-651ccaafbff8?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: '50',
    rating: '4.8',
  },
  {
    id: '5',
    categoryId: '1',
    title: 'Флет Вайт',
    imageUrl:
      'https://images.unsplash.com/photo-1688683035298-2eff07d8c323?q=80&w=927&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: '55',
    rating: '4.7',
  },
  {
    id: '6',
    categoryId: '1',
    title: 'Маккіато',
    imageUrl:
      'https://images.unsplash.com/photo-1586004984843-25ac1da962c3?q=80&w=1302&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: '55',
    rating: '4.6',
  },
  {
    id: '7',
    categoryId: '1',
    title: 'Доппіо',
    imageUrl:
      'https://images.unsplash.com/photo-1686860633705-52054227718b?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: '45',
    rating: '4.7',
  },
  {
    id: '8',
    categoryId: '1',
    title: 'Тріппло',
    imageUrl:
      'https://images.unsplash.com/photo-1648867134727-0b868ba73eb4?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: '50',
    rating: '4.6',
  },
  {
    id: '9',
    categoryId: '1',
    title: 'Рістретто',
    imageUrl:
      'https://images.unsplash.com/photo-1587663939437-9f9f1e8c9f82?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: '35',
    rating: '4.5',
  },
  {
    id: '10',
    categoryId: '1',
    title: 'Лунго',
    imageUrl:
      'https://images.unsplash.com/photo-1657778515214-99ec3a2d3d38?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: '65',
    rating: '4.4',
  },
  {
    id: '11',
    categoryId: '1',
    title: 'Кон панна',
    imageUrl:
      'https://images.unsplash.com/photo-1585970279348-df94767b9cca?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: '70',
    rating: '4.5',
  },
  {
    id: '12',
    categoryId: '1',
    title: 'Бреве',
    imageUrl:
      'https://images.unsplash.com/photo-1521677633993-721dd3f95c10?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: '55',
    rating: '4.7',
  },
  {
    id: '13',
    categoryId: '1',
    title: 'По-віденськи',
    imageUrl:
      'https://images.unsplash.com/photo-1594060445139-717b4b8b3a37?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: '40',
    rating: '4.8',
  },
  {
    id: '14',
    categoryId: '1',
    title: 'Латте Маккіато',
    imageUrl:
      'https://images.unsplash.com/photo-1594146971821-373461fd5cd8?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: '65',
    rating: '4.7',
  },
  {
    id: '15',
    categoryId: '1',
    title: 'Фредо',
    imageUrl:
      'https://images.unsplash.com/photo-1724080419348-0e8955618fc6?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: '45',
    rating: '4.4',
  },
  {
    id: '16',
    categoryId: '1',
    title: 'Айріш',
    imageUrl:
      'https://images.unsplash.com/photo-1730303557690-07dc29dc132f?q=80&w=1363&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: '50',
    rating: '4.6',
  },
  {
    id: '17',
    categoryId: '1',
    title: 'Корретто',
    imageUrl:
      'https://images.unsplash.com/photo-1620052087057-bfd8235f5874?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: '40',
    rating: '4.5',
  },
  {
    id: '18',
    categoryId: '1',
    title: 'Раф кава',
    imageUrl:
      'https://images.unsplash.com/photo-1580337604891-dc9b472d8fa7?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: '35',
    rating: '4.8',
  },
  {
    id: '19',
    categoryId: '1',
    title: 'Романо',
    imageUrl:
      'https://images.unsplash.com/photo-1605468596782-502ce2012ef0?q=80&w=2354&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: '30',
    rating: '4.3',
  },
  {
    id: '20',
    categoryId: '1',
    title: 'Медовий Раф',
    imageUrl:
      'https://images.unsplash.com/photo-1563971318399-87f3b26e554c?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: '40',
    rating: '4.7',
  },
  {
    id: '21',
    categoryId: '1',
    title: 'Гляссе',
    imageUrl:
      'https://images.unsplash.com/photo-1752917069627-0753ec7a7915?q=80&w=986&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: '45',
    rating: '4.6',
  },
  {
    id: '22',
    categoryId: '1',
    title: 'Мокко',
    imageUrl:
      'https://images.unsplash.com/photo-1568672915958-84317e3d6444?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: '50',
    rating: '4.7',
  },
  {
    id: '23',
    categoryId: '1',
    title: 'Марочино',
    imageUrl:
      'https://images.unsplash.com/photo-1635607415838-76b03052a668?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: '45',
    rating: '4.5',
  },
  {
    id: '24',
    categoryId: '1',
    title: 'Бічерін',
    imageUrl:
      'https://images.unsplash.com/photo-1646972807954-2b35c5959fa0?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    price: '65',
    rating: '4.8',
  },
];

export default products;
