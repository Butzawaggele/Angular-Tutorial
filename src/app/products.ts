export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'E-Gitarre',
    price: 799,
    description: 'Ist wie eine akustische Gitarre, nur halt elektrisch...',
  },
  {
    id: 2,
    name: 'Super-Strat',
    price: 699,
    description: 'Einfach super!',
  },
  {
    id: 3,
    name: '7-Saiter',
    price: 299,
    description: '',
  },
  {
    id: 4,
    name: 'Surfcaster',
    price: 411,
    description: 'Nicht als Surfbrett verwendbar!!!',
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
