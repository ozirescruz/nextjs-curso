import { GetServerSideProps } from 'next';
import GlobalStyles from '../styles/GlobalStyles';
import { Title } from '../styles/pages/Home';

interface IProduct {
  id: string;
  title: string;
}

interface HomeProps {
  recommendedProducts: IProduct[];
}

export default function Home({recommendedProducts}:HomeProps) {  
  return (
    <div>
      <GlobalStyles/>
      <section>
        <Title>Products</Title>
      </section>

      <ul>
        {recommendedProducts.map(product => {
          return (
            <li key={product.id}>
              {product.title}
            </li>
          )
        })}
      </ul>
            
    </div>
  )
}

export const getServerSideProps:GetServerSideProps<HomeProps> = async () => {
  const response = await  fetch('http://localhost:3333/recommended');
  const recommendedProducts = await response.json();

  return {
    props: {
      recommendedProducts
    }

  }
}