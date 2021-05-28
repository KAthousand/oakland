
import './App.css';
import Information from './screens/Information/Information';
import Landing from './screens/Landing/Landing';
import Menu from './screens/Menu/Menu';
import Layout from './screens/shared/Layout/Layout';
import Title from './screens/Title/Title';

function App() {
  return (
    <Layout>
      <Landing />
      <Title />
      <Menu />
      <Information/>
    </Layout>
  );
}

export default App;
