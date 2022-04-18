import React  from  'react';
import Data from './Data';
import Input from './Input';
import './style.css';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {nama : 'Andi', umur: 25, nim:112233}
  }
    _ubahNama = () => this.setState({nama :'Andi', umur: 25,nim:112233 })
    _ubahNama2=(namabaru) => this.setState({nama:namabaru})
    _ubahUmur2 = (umurbaru) => this.setState({umur:parseInt(umurbaru)})
    _ubahNim2 = (nimbaru) => this.setState({nim:parseInt(nimbaru)})

  
  render() {
    return (
      <div className='App'>
        <div className='header'>
          Pencatatan data mahasiswa
        </div>



      
        <Data
        nama={this.state.nama}
        umur={this.state.umur}
        nim ={this.state.nim}>
        </Data>

        <Input
        _ubahNama={this._ubahNama}
        _ubahNama2={this._ubahNama2}
        _ubahUmur2={this._ubahUmur2}
        _ubahNim2={this._ubahNim2}>
        </Input>

        
      </div>
      
    );
  }
}

export default App


