import { NextPage } from 'next';
import 'react-loading-skeleton/dist/skeleton.css';
import Header from '../components/Header/Header';
import ProductCard from '../components/ProductCard/ProductCard';
import * as S from '../styles/styles';
import axios from 'axios';

type Product = {
  id: string;
  name: string;
  description: string;
  image: string;
  price: string;
};

type Props = {
  products: Product[];
};

const Home: NextPage<Props> = ({ products }) => {
  // if (!products) {
  //   return (
  //     <>
  //       <Header />
  //       <Skeleton height={800} count={5} baseColor="#141414"/>
  //       <Skeleton height={800} count={5} baseColor="#141414"/>
  //       <Skeleton height={800} count={5} baseColor="#141414"/>
  //     </>
  //   );
  // }

  return (
    <>
      <Header />
      <S.Main>
        <S.MainSection>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              quantity={1}
              name={product.name}
              description={product.description}
              image={product.image}
              price={product.price}
            />
          ))}
        </S.MainSection>
      </S.Main>
    </>
  );
};

Home.getInitialProps = async () => {
  try {
    const res = await axios.get('https://fakestoreapi.com/products/', {
      headers: {
        // Simula um navegador Chrome moderno para evitar o erro 403
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36',
        'Accept': 'application/json',
        'Accept-Encoding': 'identity'
      }
    });

    return {
      products: res.data,
    };
  } catch (error) {
    // Tratamento de erro básico para evitar que a página quebre totalmente
    const err = error as any;
    console.error("Erro ao carregar produtos:", err.response?.status || err.message);
    return {
      products: [],
    };
  }
};

export default Home;

