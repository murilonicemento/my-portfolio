<template>
  <h1>Contato</h1>
  <form>
    <label for="name">Nome Completo</label>
    <input type="text" name="name" id="name" placeholder="Nome Completo" />
    <label for="e-mail">E-mail</label>
    <input type="email" name="e-mail" id="e-mail" placeholder="E-mail" />
    <label for="subject">Assunto</label>
    <input type="text" name="subject" id="subject" placeholder="Assunto" />
    <label for="message">Mensagem</label>
    <textarea name="message" id="message" placeholder="Mensagem"></textarea>
    <button type="submit">Enviar</button>
  </form>
</template>

<style scoped lang="css">
h1 {
  text-align: center;
}

form {
  margin-top: 28px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

form label {
  font-size: 14px;
}

form input {
  background-color: var(--color-black-hover);

  height: 38px;

  padding: 4px;
}

form input::placeholder,
form textarea::placeholder {
  color: var(--color-white);
}

form textarea {
  background-color: var(--color-black-hover);

  height: 78px;

  padding: 4px;

  font-size: 14px;
}

form button {
  width: 80px;
  height: 38px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--color-pink);

  font-size: 14px;
  font-weight: 600;
  color: var(--color-white);

  margin-top: 8px;
  padding: 18px;

  cursor: pointer;
}
</style>
