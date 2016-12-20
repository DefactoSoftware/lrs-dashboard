import React from 'react';
import Modal from '../Modal';
import CSS from './style.css';

export default ({ email, password, onEmailChange, onPasswordChange, onSubmit })=> (
  <Modal className={CSS.LoginModal}>
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={email}
        onChange={onEmailChange}
        className={CSS.TextInput}
        placeholder="Email..."
      />
      <input
        type="password"
        value={password}
        className={CSS.PasswordInput}
        onChange={onPasswordChange}
        placeholder="Password..."
      />
      <input type="submit" className={CSS.Button}  value="Submit" />
    </form>
  </Modal>
);
