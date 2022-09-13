import "./App.css";
import Header from "./components/Header";
import Input from "./components/Input";

function App() {
  return (
    <main>
      <Header />
      <h1>Teste</h1>
      {/* // type, label, id, name */}
      <Input type="text" label="Nome:" id='nome' name='nome'/>
      <Input type="password" label="Senha:" id='senha' name='senha'/>
      <Input type="email" label="Email:" id='email' name='email'/>
      <Input type="email" label="Email:" id='email' name='email'/>
    </main>
  );
}



export default App;
