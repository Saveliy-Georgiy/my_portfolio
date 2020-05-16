import React from "react";
import styles from "./ButtonStyles.module.css";
import s from "./ButtonWindow.module.css";

class ButtonWindow extends React.Component {

    state = {
        modalWindow: false,
    };

    activateModalWindow = () => {
        this.setState({modalWindow: true});
    };

    deactivateModalWindow = () => {
        this.setState({modalWindow: false});
    };

    render = () => {

        const display = this.state.modalWindow === true ? s.displayBlock : s.displayNone;

        return (
            <div>
                <button className={styles.btnSubmit} onClick={this.activateModalWindow}>{this.props.name}</button>
                <div className={s.modalBackground + ' ' + display}>
                    <div className={s.modalWindow}>
                        <h3>Здравствуйте!</h3>
                        <p>Вы успешно отправили заявку.</p>
                        <button onClick={this.deactivateModalWindow}>Закрыть</button>
                    </div>
                </div>
            </div>
        );
    };
}


export default ButtonWindow;
