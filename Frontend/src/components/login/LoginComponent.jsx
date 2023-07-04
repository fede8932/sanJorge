import React from "react";
import styles from "./login.module.css";
import logo from "../../assets/logo/logo.png";
import Separador from "../../commonds/separador/Separador";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function LoginComponent(props) {
  const { handleSubmit } = props
  return (
    <div className={styles.LoginComponentContainer}>
      <div className={styles.contenedorSecundario}>
        <div className={styles.titleContainer}>
          <div className={styles.iconTitleContainer}>
            <img className={styles.logo} src={logo} alt="Logo" />
            <h1 className={styles.title}>Ad panel</h1>
          </div>
          <h5 className={styles.saludo}>Hola, Bienvenido!</h5>
          <span className={styles.instruction}>
            Ingresá tus credenciales para continuar
          </span>
        </div>
        <Separador props={{ clase: "separador" }} />
        <div className={styles.formContainer}>
          <span className={styles.instructionForm}>
            Ingresá con tu correo electrónico
          </span>
          <Form className={styles.formulario} onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Ingresá tu email"
                id={styles.textInput}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            <div>
              <Form.Group controlId="formBasicPassword">
                <Form.Control
                  id={styles.textInput}
                  type="password"
                  placeholder="Ingresá tu contraseña"
                />
              </Form.Group>
              <div className={styles.submitContainer}>
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check
                    type="checkbox"
                    label="Recordame"
                    className={styles.checkbox}
                  />
                </Form.Group>
                <a href="/ruta" className={styles.resetPassButton}>
                  Olvidé mi contraseña
                </a>
              </div>
            </div>
            <Button type="submit" className={styles.submitButton}>
              Iniciar sesión
            </Button>
          </Form>
        </div>
        <Separador props={{ clase: "separador" }} />
        <div className={styles.footContainer}>
          <a href="/ruta" className={styles.resetPassButton}>
            No tenés una cuenta?
          </a>
        </div>
      </div>
    </div>
  );
}

export default LoginComponent;
