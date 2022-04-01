import React, { Component } from 'react'
import '../App.css'
import { AiFillPlusSquare } from "react-icons/ai";

export default class ContactoForm extends Component {
    
    state = {
        nombre: '',
        numero: '',
        direccion: '',
    }
    
    onSubmit = (e) => {
        this.props.addContacto(this.state.nombre, this.state.numero, this.state.direccion);
        e.preventDefault();
    }

    onChange = (e) => {
        console.log(e.target.name, e.target.value)
        this.setState({
            [e.target.name]: e.target.value 
        })
    }

    render() {
        return (
            <div className="container">
                
                
                <br/>

                <form className="form-inline" onSubmit={this.onSubmit}>
                <div className="form-group mx-sm-3 mb-2">
                    
                    <input type="text" 
                    className="form-control" 
                    placeholder="Nombre"
                    name="nombre"
                    id="Nombre" 
                    onChange={this.onChange}
                    value={this.state.nombre}/>
                </div>

                <div className="form-group mx-sm-3 mb-2">
                    
                    <input type="text" 
                    className="form-control" 
                    placeholder="Numero de telefono"
                    name="numero"
                    id="Numero"
                    onChange={this.onChange}
                    value={this.state.numero}/>
                </div>

                <div className="form-group mx-sm-3 mb-2">
                   
                    <input type="text" 
                    className="form-control" 
                    placeholder="Direccion"
                    name="direccion"
                    id="exampleInputDireccion" 
                    onChange={this.onChange}
                    value={this.state.direccion}/>
                </div>

                <button type="submit" className="btn btn-outline-info ">Guardar Contacto <AiFillPlusSquare /></button>
                </form>

            </div>
        )
    }
}
