import { NextPage } from 'next';
import 'react-loading-skeleton/dist/skeleton.css';
import Header from '../components/Header/Header';
import ProductCard from '../components/ProductCard/ProductCard';
import * as S from '../styles/styles';
import axios from 'axios';

type Product = {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  price: number;
};

type Props = {
  products: Product[];
};

const Home: NextPage<Props> = ({ products }) => {

  return (
    <>
      <Header />

      <S.Main>
        <S.MainSection>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id.toString()}
              quantity={1}
              name={product.title}
              description={product.description}
              image={product.thumbnail}
              price={product.price.toString()}
            />
          ))}
        </S.MainSection>
      </S.Main>
    </>
  );
};

Home.getInitialProps = async () => {
  try {

    const res = await axios.get('https://dummyjson.com/products');

    console.log("Produtos carregados:", res.data.products);

    return {
      products: res.data.products
    };

  } catch (error: any) {

    console.error(
      "Erro ao carregar produtos:",
      error.response?.status || error.message
    );

    return {
      products: []
    };
  }
};

export default Home;