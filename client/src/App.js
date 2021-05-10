
import './App.css';
import Menu from './screens/Menu/Menu';
import Layout from './screens/shared/Layout/Layout';
import Title from './screens/Title/Title';

function App() {
  return (
    <Layout>
      <Title />
      <Menu />
    </Layout>
  );
}

export default App;
