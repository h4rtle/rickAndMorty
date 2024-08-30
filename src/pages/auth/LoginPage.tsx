import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const correctLogin = "kirillLoh";
  const correctPassword = "password";

  const onSubmit = async (data) => {
    if (data.userName === correctLogin && data.password === correctPassword)
      navigate("/characters", { replace: true });
  };

  return (
    <div className="field">
      <form className="loginField" onSubmit={handleSubmit(onSubmit)}>
        <label>Имя пользователя : </label>
        <input type="text" {...register("userName")} />

        <label>Пароль : </label>
        <input type="password" {...register("password")} />

        <button type="submit">Войти</button>
      </form>
    </div>
  );
};

export default LoginPage;
