import React, { Component } from 'react'
import { AiFillCloseCircle } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";

import '../App.css'

export default class contacto extends Component {

    state = {
        nombre: this.props.contacto.nombre,
        numero: this.props.contacto.numero,
        direccion: this.props.contacto.direccion,
        disabled: true
    }

    
    handleGameClik() {
    this.setState( {disabled: !this.state.disabled} )
  } 

 
  EstiloEditanto() {
    return {  
        color: this.state.disabled ? 'white' : '#c2c2c2',
        fontSize: this.state.disabled ? '0.9rem' : '1rem',
        border: "none",
        padding: "15px",
        align: "center",
        textDecoration: "none",
        background: "#008CBA"
    }
}
    
    onSubmit = (e) => {
        e.preventDefault();
    }
    
 
    onChange = (e) => {
        console.log(e.target.name, e.target.value)
        this.setState({
            [e.target.name]: e.target.value 
        })
    }

   
    render() {       
        const {contacto} = this.props;
        
        return (
            <div className="container" style={TarjetaContacto}>

                <div className="container-md" >
                    
                    <div className="card-body">

                        <form onSubmit={this.onSubmit}>
                            <h5 className="card-title mb-2"></h5>
                            <div className="form-group row">
                            <input type="text"
                            id="nombre" 
                            onChange={this.onChange} 
                            name ="nombre" 
                            value={this.state.nombre}
                            disabled = {(this.state.disabled) ? "disabled" : ""}/>
                            </div>

                            <h5 className="card-title mb-2"></h5>
                            <div className="form-group row">
                            <input type="text" 
                            onChange={this.onChange} 
                            name ="numero" 
                            value={this.state.numero}
                            disabled={(this.state.disabled) ? "disabled" : ""}/>
                            </div>

                            <h5 className="card-title mb-2"></h5>
                            <div className="form-group row">
                            <input type="text" 
                            onChange={this.onChange} 
                            name ="direccion" 
                            value={this.state.direccion}
                            disabled = {(this.state.disabled) ? "disabled" : ""}/>
                            </div>
                            <div className="container-fluid">
                                <button type="submit" className="btn btn-secundary m-2"
                                    style={this.EstiloEditanto()}
                                    onClick = {this.handleGameClik.bind(this)}>
                                    Editar
                                    <AiFillEdit />
                                </button>
                                <button type="button" className="btn btn-danger m-2"
                                    style={btnEliminar}
                                    onClick = {this.props.deleteContacto.bind(this, contacto.id)}>
                                    Eliminar
                                    <AiFillCloseCircle />
                                </button>

                            </div>
                            {"  "}
                        </form>
                        
                    </div>
                </div>
            </div>
        )
    }
}


const TarjetaContacto = {
    width: "20rem",
    margin: "2% 3% 1% 4%",
    display: "inline-block",
    align: "center"
}

const btnEliminar = {
    border: "none",
    color: "white",
    padding: "15px",
    align: "center",
    textDecoration: "none",
    background: "#f44336"
}
