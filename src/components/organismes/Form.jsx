import React from "react";
import Button from "../atoms/Button";
import Text from "../atoms/Text";
import CustomInput from "../atoms/Input";
import "./Form.css"

function Form(){
    return(
        <div className="form">
            <Text text="Innovación y control al alcance de tu mano" size="large"/> <br />
            <Text text="Clave del producto" size="medium"/>
            <CustomInput type="number" placeholder="Clave"/>
            <Text text="Nombre del producto" size="medium"/>
            <CustomInput type="text" placeholder="Nombre del producto"/>
            <Text text="Precio de compra" size="medium"/>
            <CustomInput type="number" placeholder="Precio de compra"/>
            <Text text="Precio de venta"size="medium"/>
            <CustomInput type="number" placeholder="Precio de venta"/>
            <Text text="Sección" size="medium"/>
            <CustomInput type="text" placeholder="Sección"/>
            <Button caption="Agregar Producto" />
        </div>
    );
}

export default Form;