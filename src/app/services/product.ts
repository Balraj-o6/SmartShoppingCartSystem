import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [
    {
    id: 1,
    name: 'Gaming Laptop',
    description: 'High-performance laptop for gaming',
    price: 1200,
    stock: 5,
    rating: 4.8,
    category: 'Electronics',
    imageUrl: 'https://imgs.search.brave.com/7uAbPMibQjDK2Cfc1vPxaCIypbHQrYrnJgx-T5w5sKA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmRl/bGwuY29tL2lzL2lt/YWdlL0RlbGxDb250/ZW50L2NvbnRlbnQv/ZGFtL3NzMi9wcm9k/dWN0LWltYWdlcy9k/ZWxsLWNsaWVudC1w/cm9kdWN0cy9ub3Rl/Ym9va3MvaW5zcGly/b24tbm90ZWJvb2tz/LzE0LTc0NDAvaW5z/cGlyb24tNzQ0MC0y/aW4xLWxhcHRvcC1h/Y3RpdmUtcGVuLmpw/Zw'
  },
  {
    id: 2,
    name: 'Wireless Headphones',
    description: 'Noise-cancelling over-ear headphones',
    price: 150,
    stock: 10,
    rating: 4.5,
    category: 'Accessories',
    imageUrl: 'https://imgs.search.brave.com/hDM-FXzrhvai3ZSieUxE0j9YAKodM6Kc6hpABNkxp1g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGV4ZWxzLmNv/bS9waG90b3MvNTI2/OTc1OS9wZXhlbHMt/cGhvdG8tNTI2OTc1/OS5qcGVnP2F1dG89/Y29tcHJlc3MmY3M9/dGlueXNyZ2ImZHBy/PTEmdz01MDA'
  },
  {
    id: 3,
    name: 'Gaming Mouse',
    description: 'Ergonomic wireless gaming mouse',
    price: 50,
    stock: 20,
    rating: 4.3,
    category: 'Accessories',
    imageUrl: 'https://imgs.search.brave.com/e_SEYWCnFNWfI0qqYLOotcIsmYKlGlpyArv0D9Kq7SQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzEwLzM0LzE2LzEx/LzM2MF9GXzEwMzQx/NjExOTBfT0VWWWlk/RkdZNndPRUFtSmRS/ZFNraWZ1RXJOUmt3/VlQuanBn'
  },
  {
    id: 4,
    name: '4K Smart TV',
    description: '55-inch Ultra HD Smart Television',
    price: 600,
    stock: 8,
    rating: 4.6,
    category: 'Electronics',
    imageUrl: 'https://imgs.search.brave.com/bWyCiCJzoBhvUGLcjNsX3HNvsqdVwKXuCSF5KtKtMc4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/ODE3ZkdHTUprSEwu/anBn'
  },
  {
    id: 5,
    name: 'Mechanical Keyboard',
    description: 'RGB backlit mechanical keyboard',
    price: 90,
    stock: 15,
    rating: 4.7,
    category: 'Accessories',
    imageUrl: 'https://imgs.search.brave.com/MP4XyRv7ZzmV28_JWeOl6igtVWsbMKfuu8oNHgj4TqA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0L0ho/N3RBOUczaDVCSjZa/alA1R25DZWMuanBn'
  },
  {
    id: 6,
    name: 'Smartphone',
    description: 'Latest model 5G smartphone',
    price: 800,
    stock: 12,
    rating: 4.9,
    category: 'Electronics',
    imageUrl: 'https://imgs.search.brave.com/Ww98oxSghUd8vj3ayAtPyKocIy_ZvvYvFj39eZWqpBo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGV4ZWxzLmNv/bS9waG90b3MvMzAy/Nzc1MjIvcGV4ZWxz/LXBob3RvLTMwMjc3/NTIyL2ZyZWUtcGhv/dG8tb2Ytc21hcnRw/aG9uZS1kaXNwbGF5/aW5nLWFwcHMtb24t/Z3JlZW4tYmVuY2gu/anBlZz9hdXRvPWNv/bXByZXNzJmNzPXRp/bnlzcmdiJmRwcj0x/Jnc9NTAw'
  },
  {
    id: 7,
    name: 'Coffee Maker',
    description: 'Programmable drip coffee machine',
    price: 80,
    stock: 25,
    rating: 4.4,
    category: 'Home',
    imageUrl: 'https://imgs.search.brave.com/zR4umxnPVGBcri84ggWVBGlHupQsUyI5L_3wqX0IMbE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNjcv/MzQwLzM0NS9zbWFs/bC9hLWNvZmZlZS1t/YWtlci1vbi1hLWNv/dW50ZXItd2l0aC1i/ZWFucy1hbmQtYS10/b3dlbC1waG90by5q/cGVn'
  },
  {
    id: 8,
    name: 'Running Shoes',
    description: 'Lightweight breathable running sneakers',
    price: 110,
    stock: 30,
    rating: 4.6,
    category: 'Clothing',
    imageUrl: 'https://imgs.search.brave.com/jIMxTzv13gR62OjAUvNzBXSNUlZnxH4NOhm1y6sptrw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMTMv/NDY1LzgxNy9zbWFs/bC9ydW5uaW5nLWFu/ZC1zcG9ydHMtc2hv/ZXMtcGhvdG8uanBn'
  },
  {
    id: 9,
    name: 'Yoga Mat',
    description: 'Non-slip exercise yoga mat',
    price: 30,
    stock: 40,
    rating: 4.5,
    category: 'Sports',
    imageUrl: 'https://imgs.search.brave.com/0nKNuMZWW8fOsfgKFkATJASSt15JjLsio_UFH6oge88/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jdWx0/c3RvcmUuY29tL2Nk/bi9zaG9wL2ZpbGVz/LzcwNTU2NF8xLmpw/Zz92PTE3NTkyNDA1/Mjgmd2lkdGg9MTA4/MA'
  },
  {
    id: 10,
    name: 'Desk Lamp',
    description: 'LED adjustable desk lamp',
    price: 45,
    stock: 18,
    rating: 4.2,
    category: 'Home',
    imageUrl: 'https://imgs.search.brave.com/9IUIx9ZE3s3i871qPMPg-3u7-LpGIgig83skKMDGg14/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE5/OTQ0NjY0NC9waG90/by9sYW1wLWFuZC1i/b29rLW9uLXRoZS1k/ZXNrLXRvcC1zcGFj/ZS1mb3ItdGV4dC5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/SU5CSkppYU5GTzhG/WDlEZlhJTnpiVWlX/RjI4MTBoa0NuY0ZZ/a0RHZTFZZz0'
  },
  {
    id: 11,
    name: 'Backpack',
    description: 'Water-resistant laptop backpack',
    price: 60,
    stock: 22,
    rating: 4.4,
    category: 'Accessories',
    imageUrl: 'https://imgs.search.brave.com/JD1FFRV5ymBGl9jbDGFuLprkb3OE9QP7LfHJZJR-zms/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dXJiYW5tb25rZXku/Y29tL2Nkbi9zaG9w/L2ZpbGVzLzJfaW5f/MV90cmF2ZWxfYmFj/a3BhY2tfMDIuanBn/P3Y9MTc2MTYzOTI3/NCZ3aWR0aD02MDA'
  },
  {
    id: 12,
    name: 'Bluetooth Speaker',
    description: 'Portable waterproof speaker',
    price: 70,
    stock: 16,
    rating: 4.5,
    category: 'Electronics',
    imageUrl: 'https://imgs.search.brave.com/xRqUgeURz_E9Z2w8fuO13rJVyl4c6WHEhqQxhjmtmoQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zaG9w/LnplYnJvbmljcy5j/b20vY2RuL3Nob3Av/Y29sbGVjdGlvbnMv/emViLVdpcmVsZXNz/X3NwZWFrZXJzLWJh/bm5lci5qcGc_dj0x/NjU5NTIzNDYyJndp/ZHRoPTI2MDA'
  },
  {
    id: 13,
    name: 'Winter Jacket',
    description: 'Insulated hooded winter coat',
    price: 140,
    stock: 10,
    rating: 4.7,
    category: 'Clothing',
    imageUrl: 'https://imgs.search.brave.com/Q_UxBA1C0-fSYPo9cNIdwICethgmm-brpxmnhXF-2nU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFGVW4wM0pKN0wu/anBn'
  },
  {
    id: 14,
    name: 'Cookbook',
    description: 'Bestselling healthy recipes guide',
    price: 25,
    stock: 50,
    rating: 4.8,
    category: 'Books',
    imageUrl: 'https://imgs.search.brave.com/b2EeGu8vBNGcmrCqVpJrGW0TZVz5VvfNcuW59V9pz8s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzE3LzkyLzc1Lzc3/LzM2MF9GXzE3OTI3/NTc3NjdfQzVmaDgw/b1lWU0ZENUZVRUFT/N2pEdDJ2Wlk3SkNx/dzYuanBn'
  },
  {
    id: 15,
    name: 'Dumbbell Set',
    description: 'Adjustable weight dumbbell pair',
    price: 100,
    stock: 14,
    rating: 4.6,
    category: 'Sports',
    imageUrl: 'https://imgs.search.brave.com/Q41eqVH9RFMH0nLXQu2OQnnuWH4NRzbO9qfmOd6iR0M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c3VwZXJzdHJvbmcu/Y28udWsvY2RuL3No/b3AvcHJvZHVjdHMv/SGV4LUR1bWJiZWxs/LVNldC0yXzVrZy0z/MGtnXy0xMi1wYWly/cy1pbmNyZW1lbnRz/LW9mLTJfNWtnLUR1/bWJiZWxscy1TdXBl/clN0cm9uZy1GaXRu/ZXNzLVdpdGgtUmFj/ay02LmpwZz92PTE3/MDMwNzI5Mzgmd2lk/dGg9NTMz'
  },
  {
    id: 16,
    name: 'Blender',
    description: 'High-speed smoothie blender',
    price: 95,
    stock: 20,
    rating: 4.5,
    category: 'Home',
    imageUrl: 'https://imgs.search.brave.com/n_oU5qd23E_g-6hjuOuJ4JWVI2YaNvgeC-I3olzUtas/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTM3/OTM5NTg2L3ZlY3Rv/ci9lbGVjdHJpYy1i/bGVuZGVyLW1peGVy/LW1hY2hpbmUtbWFr/aW5nLWRldG94LWRp/ZXQtanVpY2Utd2l0/aC1mcnVpdC1hcHBs/ZS1iYW5hbmEta2l3/aS5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9aUx5azg3TkxB/Z1l1enItODRSUExz/bnVMVkw3OUtmSzVp/NXF6VktQc0F1OD0'
  },
  {
    id: 17,
    name: 'Sunglasses',
    description: 'UV protection polarized sunglasses',
    price: 120,
    stock: 25,
    rating: 4.3,
    category: 'Accessories',
    imageUrl: 'https://imgs.search.brave.com/KLv5lJNWuNIz3H5vSCKdz59YmRinpYzpPd3_l1qeAHw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMDQv/NzE4LzI4MC9zbWFs/bC9zdW5nbGFzc2Vz/LWluLWEtYmxhY2st/ZnJhbWUtb24teWVs/bG93LWJhY2tncm91/bmQtcGhvdG8uanBn'
  },
  {
    id: 18,
    name: 'Novel',
    description: 'Fiction bestseller paperback',
    price: 15,
    stock: 60,
    rating: 4.9,
    category: 'Books',
    imageUrl: 'https://imgs.search.brave.com/gPB187HJ9p0OCHULZUpAqRjAeDCplIG9sQlmkjQfhqk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFMc0MtOXN2V0wu/anBn'
  },
  {
    id: 19,
    name: 'Tennis Racket',
    description: 'Professional grade tennis racket',
    price: 180,
    stock: 8,
    rating: 4.7,
    category: 'Sports',
    imageUrl: 'https://imgs.search.brave.com/hMQn5ICLUkrINR1bok2gHL9McAynytfLEsolcbqC6Wk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c2h1dHRlcnN0b2Nr/LmNvbS9pbWFnZS1w/aG90by90ZW5uaXMt/cmFja2V0LWhhbmdz/LWFpci1hY3Jvc3Mt/NjAwbnctMjMxMzk4/ODY4OS5qcGc'
  },
  {
    id: 20,
    name: 'Jeans',
    description: 'Classic fit denim jeans',
    price: 55,
    stock: 35,
    rating: 4.4,
    category: 'Clothing',
    imageUrl: 'https://imgs.search.brave.com/fzXUVJIpaOb2TUn3Zfl3-91MWQUWfIJCXzLSO3NraVQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDg4/NDk5MjYxL3Bob3Rv/L2plYW5zLWlzb2xh/dGVkLW9uLXdoaXRl/LWJhY2tncm91bmQu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PWs2a0hPa1NxWWdH/emJEOE5paE9sOGdD/aVh5TjRHekp1V2ZH/Mzk2MHM4QTQ9'
  }
  ];

  getAllProducts(): Product[] {
    return [...this.products];
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(p => p.id === id);
  }

  getProductsByCategory(category: string): Product[] {
    return this.products.filter(p => p.category === category);
  }

  searchProducts(query: string): Product[] {
    query = query.toLowerCase();

    return this.products.filter(p =>
      p.name.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query)
    );
  }

  updateProductStock(productId: number, quantity: number): boolean {
    const product = this.getProductById(productId);

    if (!product) {
      return false;
    }

    product.stock += quantity;
    return true;
  }

  addProduct(product: Product): boolean {
    this.products.push(product);
    return true;
  }

  deleteProduct(productId: number): boolean {
    const index = this.products.findIndex(p => p.id === productId);

    if (index === -1) {
      return false;
    }

    this.products.splice(index, 1);
    return true;
  }

  getFeaturedProducts(): Product[] {
    return this.products
      .filter(p => p.rating > 4.5)
      .slice(0, 5);
  }

  getLowStockProducts(): Product[] {
    return this.products.filter(p => p.stock < 5);
  }

  getCategories(): string[] {
    return [...new Set(this.products.map(p => p.category))];
  }
}